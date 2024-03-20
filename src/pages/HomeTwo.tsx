import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../constants";
import CTA from "../components/CTA";
const HomeTwo = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";
  return (
    <section className="max-container">
      <div className="flex justify-center">
        {" "}
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins tracking-tighter">
          {t("about.introduction")}{" "}
          <span className=" font-semibold drop-shadow blue-gradient_text">
            Alec
          </span>
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
      </div>

      <div className="flex justify-center overflow-hidden h-8 sm:h-12">
        <h1 className="sm:text-5xl text-3xl font-semibold font-poppins tracking-tighter">
          {t("home.me")}
        </h1>
        <h1 className="sm:text-5xl text-3xl font-semibold font-poppins tracking-tighter">
          <ul className="content_container_list text-left pl-[0.5vw] ">
            <li className="content_container_list_item yellow-gradient_text pl-2">
              {t("home.data")}
            </li>
            <li className="content_container_list_item orange-gradient_text pl-2">
              {t("home.developer")}
            </li>
            <li className="content_container_list_item red-gradient_text  pl-2">
              {t("home.entreprenuer")}
            </li>
            <li className="content_container_list_item blue-gradient_text pl-2">
              {t("home.learner")}
            </li>
          </ul>
        </h1>
      </div>
      <div className="py-10 flex flex-col">
        <div className="mt-16 flex flex-wrap gap-12 justify-center">
          {socialLinks.map((social, index) => (
            <a href={social.link} target="_blank">
              <div className="block-container w-20 h-20" key={`skill-${index}`}>
                <div className="btn-front rounded-xl flex justify-center items-center hover:bg-gray-300">
                  <img
                    src={social.iconUrl}
                    alt={social.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mb-12 mt-12 flex flex-col mt-3 justify-end text-slate-400">
        <p>
          "It doesn’t matter how many times you fail. You only have to be right
          once and then everyone can tell you that you are an overnight
          success." <br /> - Mark Cuban
        </p>
      </div>

      <div className="mb-12 flex flex-col justify-end text-slate-400 h-[25vh]">
        <hr />

        <div className="mt-8 flex flex-col items-start text-slate-300">
          <a href="/info" className="mt-12">
            <p>Extra Info</p>
          </a>
          <p>© Copyright 2024 Alec</p>
        </div>
      </div>
    </section>
  );
};
export default HomeTwo;
