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

      <div className="flex justify-center overflow-hidden h-8 sm:h-12  ">
        {" "}
        <h1 className="sm:text-5xl text-3xl font-semibold font-poppins tracking-tighter">
          {"I'm a"}{" "}
        </h1>
        <h1 className="sm:text-5xl text-3xl font-semibold font-poppins tracking-tighter">
          <ul className="content_container_list text-center pl-[1vw] ">
            <li className="content_container_list_item yellow-gradient_text ">
              Data Analyst
            </li>
            <li className="content_container_list_item orange-gradient_text  ">
              Developer
            </li>
            <li className="content_container_list_item red-gradient_text pl-2 ">
              Entreprenuer
            </li>
            <li className="content_container_list_item">Learner</li>
          </ul>
        </h1>
        {/* <span className="orange-gradient_text_animated font-semibold drop-shadow">
              Programmer
            </span> */}
      </div>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        {/* <p>{t("about.subtitle")}</p> */}
      </div>

      <div className="py-10 flex flex-col">
        <div className="mt-16 flex flex-wrap gap-12 justify-center">
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
    </section>
  );
};
export default HomeTwo;
