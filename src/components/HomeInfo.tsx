import React from "react";
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
interface Props {
  text: string;
  link: string;
  btnText: string;
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
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Alec</span>
      <br />A Software Engineer from Brazil
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  3: (
    <InfoBox
      text="Worked with many companies and picked up many skills"
      link="/Contact"
      btnText="Learn More"
    />
  ),
  4: (
    <InfoBox
      text="Worked with many companies and picked up many skills"
      link="/about"
      btnText="Learn More"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
