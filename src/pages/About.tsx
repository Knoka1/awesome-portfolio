import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";
import Popover from "../components/Popover";
const About = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";
  return (
    <section className="max-container">
      <h1 className="head-text">
        {t("about.introduction")}{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Alec
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{t("about.subtitle")}</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">{t("about.skills")}</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div
              className="block-container w-20 h-20 group"
              key={`skill-${index}`}
            >
              <Popover
                type="info"
                text={`${skill.name}`}
                className="hidden group-hover:block bottom-20"
              />

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

      <div className="py-16">
        <h3 className="subhead-text">{t("about.work")}</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>{t("about.rundown")}</p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            <VerticalTimelineElement
              date={experiences[0].date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experiences[0].icon}
                    alt={experiences[0].company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experiences[0].iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experiences[0].iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {t(`constants.experience0.title`)}
                </h3>
                <p
                  className="text-black font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experiences[0].company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience0.point0`)}
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience0.point1`)}
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience0.point2`)}
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience0.point3`)}
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date={experiences[1].date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experiences[1].icon}
                    alt={experiences[1].company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experiences[1].iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experiences[1].iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {t(`constants.experience1.title`)}
                </h3>
                <p
                  className="text-black font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experiences[1].company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience1.point0`)}
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience1.point1`)}
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience1.point2`)}
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience1.point3`)}
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date={experiences[2].date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experiences[2].icon}
                    alt={experiences[2].company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experiences[2].iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experiences[2].iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {t(`constants.experience2.title`)}
                </h3>
                <p
                  className="text-black font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experiences[2].company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience2.point0`)}
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience2.point1`)}
                </li>
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience2.point2`)}
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date={experiences[3].date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experiences[3].icon}
                    alt={experiences[3].company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experiences[3].iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experiences[3].iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {t(`constants.experience3.title`)}
                </h3>
                <p
                  className="text-black font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experiences[3].company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience3.point0`)}
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date={experiences[4].date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experiences[4].icon}
                    alt={experiences[4].company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experiences[4].iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experiences[4].iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {t(`constants.experience4.title`)}
                </h3>
                <p
                  className="text-black font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experiences[4].company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  {t(`constants.experience4.point0`)}
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
