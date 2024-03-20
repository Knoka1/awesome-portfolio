import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import { arrow } from "../assets/icons";
import { useTranslation } from "react-i18next";
interface Props {
  text: string;
  link: string;
  btnText: string;
}
interface IHomeInfo {
  currentStage: number;
}
const InfoBox: React.FC<Props> = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const HomeInfo: React.FC<IHomeInfo> = ({ currentStage }) => {
  const { t } = useTranslation();
  const renderContent: any = {
    1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        {t("components.homeinfo.1.introduction")}{" "}
        <span className="font-semibold">Alec</span>
        <br />
        {t("components.homeinfo.1.subtitle")}
      </h1>
    ),
    2: (
      <InfoBox
        text={`${t("components.homeinfo.2.introduction")}`}
        link="/projects"
        btnText="Visit my portfolio"
      />
    ),
    3: (
      <InfoBox
        text={`${t("components.homeinfo.3.introduction")}`}
        link="/Contact"
        btnText="Learn More"
      />
    ),
    4: (
      <InfoBox
        text={`${t("components.homeinfo.4.introduction")}`}
        link="/about"
        btnText="Learn More"
      />
    ),
  };

  return renderContent[currentStage] || null;
};

export default HomeInfo;
