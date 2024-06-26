import {
  // angular,
  // car,
  // contact,
  clerigos,
  csharp,
  css,
  cvicon,
  // estate,
  // express,
  git,
  github,
  html,
  javascript,
  linkedin,
  microsoftsqlserver,
  // mongodb,
  // motion,
  // mui,
  nextjs,
  nodejs,
  postgresql,
  // pricewise,
  python,
  react,
  redeglobo,
  sass,
  // snapgram,
  scroll,
  // summiz,
  tailwindcss,
  transfero,
  threads,
  typescript,
} from "../assets/icons";
// import { useTranslation } from "react-i18next";
import cv2024 from "../assets/cv2024.pdf";
export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: csharp,
    name: "CSharp",
    type: "Backend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: microsoftsqlserver,
    name: "SQLServer",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Freelance Developer and Influencer Marketing Manager",
    index: 0,
    company_name: "Scroll",
    icon: scroll,
    iconBg: "#000000",
    date: "Jun 2023 - Present",
    points: [
      "Develop and maintain web applications and apps using React and React Native",
      "Prospect and operate Influencer Marketing campaigns with top clients like GNT, Asics, Dafiti, Skechers and others",
      "Develop APIs to fetch data and analyse Influencer's key metrics",
      "Manage customer-brand relations",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    index: 1,
    company_name: "Transfero",
    icon: transfero,
    iconBg: "#accbe1",
    date: "Nov 2021 - Jun 2023",
    points: [
      "Development of the investment platform and app Transfero Prime (React, .NET Core 5.0, C#)",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      "Development of the API and structure to process over $1 M a day in payments ( .NET and C#)",
      "Creation of a bot responsible for keeping track of various cryptocurrency prices (Python)",
    ],
  },
  {
    title: "Data Analyst Intern",
    index: 2,
    company_name: "Rede Globo",
    icon: redeglobo,
    iconBg: "#b7e4c7",
    date: "Aug 2020 - Nov 2021",
    points: [
      "Structure data on key metrics on Globo's products using SQL, Google Big Query and Python for the shareholders",
      "Study and propose new ideas to Globo using relevant behavioral and comparative data on all digital products (including G1, BBB, GE, GShow, Globoplay and more)",
      "Create jobs and processes to automate data visualization and fetching",
    ],
  },
  {
    title: "Innovation Intern",
    index: 3,
    company_name: "Rede Globo",
    icon: redeglobo,
    iconBg: "#a2d2ff",
    date: "Aug 2019 - Aug 2020",
    points: [
      "Presented a framework on how to deal with customers and the future of customer data using AI (Python)",
    ],
  },
  {
    title: "Co-Founder and Director",
    index: 4,
    company_name: "Clérigos PUC-Rio",
    icon: clerigos,
    iconBg: "#00774f",
    date: "Aug 2019 - Jun 2022",
    points: [
      "Achieved over 5 titles in 3 different gaming categories involving a total of 100 students.",
    ],
  },
];

export const socialLinks = [
  // {
  //   name: "Contact",
  //   iconUrl: contact,
  //   link: "/contact",
  // },
  {
    name: "GitHub",
    index: 1,
    iconUrl: github,
    link: "https://github.com/Knoka1",
  },
  {
    name: "LinkedIn",
    index: 2,
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/alecdocouto/",
  },
  {
    name: "CV",
    index: 3,
    iconUrl: cvicon,
    link: cv2024,
  },
];
//TODO add and update projects
export const projects = [
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/Knoka1/awesome-portfolio",
  },
  // {
  //   iconUrl: threads,
  //   theme: "btn-back-green",
  //   name: "Full Stack Threads Clone",
  //   description:
  //     'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //   link: "https://github.com/adrianhajdin/threads",
  // },
  // {
  //   iconUrl: pricewise,
  //   theme: "btn-back-red",
  //   name: "Amazon Price Tracker",
  //   description:
  //     "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
  //   link: "https://github.com/adrianhajdin/pricewise",
  // },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
