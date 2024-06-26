import { Suspense, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Pug from "../3dmodels/Pug";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";

import Alert from "../components/Alert";
import { Euler, Vector3 } from "three";
const Contact = () => {
  const formRef = useRef<any>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();
  const { t } = useTranslation();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("Animation");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Alec do Couto",
          from_email: form.email,
          to_email: "alec.ribeiro@hotmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert({
          show: true,
          text: "Unfortunately we are currently unable to send this email through the website. Please contact alec.ribeiro@hotmail.com",
          type: "danger",
        });
      });
  };
  const handleFocus = () => {
    setCurrentAnimation("Animation");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">{t("contact.title")}</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            {t("contact.name")}
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="email@email.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            {t("contact.message")}
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how can I help"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? t("contact.sending") : t("contact.submit")}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 lg:mt-10 w-full lg:j-auto  md:h-[550px] h-[350px]">
        <Canvas
          camera={{ position: [0, 1.6, 5], fov: 75, near: 0.1, far: 1000 }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Pug
              position={new Vector3(0.25, -0.25, 1)}
              rotation={new Euler(12.6, -0.6, 0)}
              scale={new Vector3(6, 6, 6)}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
