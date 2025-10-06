import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow, github } from "../assets/icons";
import { useTranslation } from "react-i18next";
import CTA from "../components/CTA";
const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="max-container">
      <h1 className="head-text">
        {t("projects.my")}{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {t("projects.projects")}
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="text-slate-500 mt-2 leading-relaxed">
          {t("projects.introduction")}
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.id}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-xl font-poppins font-semibold">
                {t(`constants.projects.${project.id}.name` as any)}
              </h4>
              <p className="mt-2 text-slate-500">
                {t(`constants.projects.${project.id}.description` as any)}
              </p>
              <div className="mt-5 flex items-center gap-4 font-poppins">
                {project.link && project.link !== "" && (
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-blue-600"
                  >
                    {t("projects.link")}
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </Link>
                )}
                {project.githubLink && project.githubLink !== "" && (
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-blue-600"
                  >
                    {t("projects.github")}
                    <img
                      src={github}
                      alt="github link"
                      className="w-5 h-5 object-contain text-blue-600"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
