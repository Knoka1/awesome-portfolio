import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";
const HomeTwo = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";
  return (
    <section className="max-container">
      <div className="flex justify-center">
        {" "}
        <h1 className="sm:text-6xl text-4xl font-semibold sm:leading-snug font-poppins tracking-tighter">
          {t("about.introduction")}{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Alec
          </span>
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
      </div>
      <div className="flex justify-center">
        {" "}
        <h1 className="sm:text-6xl text-4xl font-semibold sm:leading-snug font-poppins tracking-tighter">
          {"I'm a"}{" "}
          <span className="orange-gradient_text font-semibold drop-shadow">
            Developer
          </span>
          💻
        </h1>
      </div>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        {/* <p>{t("about.subtitle")}</p> */}
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">{t("about.skills")}</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20" key={`skill-${index}`}>
              <div className="btn-back rounded-xl " />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};
export default HomeTwo;
