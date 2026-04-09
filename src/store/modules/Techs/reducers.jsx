import {
  SiJavascript,
  SiHtml5,
  SiStyledcomponents,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiJest,
  SiGit,
  SiDocker,
  SiVercel,
  SiJsonwebtokens,
  SiLinux,
  SiGithub,
  SiInsomnia,
  SiSass,
  SiTailwindcss,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiVitest,
  SiSentry,
  SiJenkins,
  SiPrometheus,
  SiAndroidstudio,
  SiFigma,
  SiTypeorm,
} from "react-icons/si";
import { FaAws, FaCss3Alt, FaWindows } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { VscAzure, VscVscode } from "react-icons/vsc";

const techsState = {
  frontend: [
    { name: "HTML", icon: <SiHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "React", icon: <SiReact size={40} /> },
    { name: "Redux", icon: <SiRedux size={40} /> },
    { name: "Styled-comp.", icon: <SiStyledcomponents size={40} /> },
    { name: "SCSS", icon: <SiSass size={40} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
    { name: "React Native", icon: <TbBrandReactNative size={40} /> },
  ],
  backend: [
    { name: "NodeJS", icon: <SiNodedotjs size={40} /> },
    { name: "Express", icon: <SiExpress size={40} /> },
    { name: "HapiJS", icon: "Hapi" },
    { name: "Python", icon: <SiPython size={40} /> },
    { name: "Flask", icon: <SiFlask size={40} /> },
    { name: "Django", icon: <SiDjango size={40} /> },
    { name: "TypeORM", icon: <SiTypeorm /> },
    { name: "JWT", icon: <SiJsonwebtokens size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
    { name: "MySQL", icon: <SiMysql size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "AWS Lambda", icon: <FaAws size={40} /> },
  ],
  tools: [
    { name: "Git", icon: <SiGit size={40} /> },
    { name: "GitHub", icon: <SiGithub size={40} /> },
    { name: "Docker", icon: <SiDocker size={40} /> },
    { name: "Jest", icon: <SiJest size={40} /> },
    { name: "Vitest", icon: <SiVitest size={40} /> },
    { name: "Azure", icon: <VscAzure size={40} /> },
    { name: "Sentry", icon: <SiSentry size={40} /> },
    { name: "Jenkins", icon: <SiJenkins size={40} /> },
    { name: "Prometheus", icon: <SiPrometheus size={40} /> },
    { name: "Android Studio", icon: <SiAndroidstudio size={40} /> },
    { name: "VSCode", icon: <VscVscode size={40} /> },
    { name: "Insomnia", icon: <SiInsomnia size={40} /> },
    { name: "Figma", icon: <SiFigma size={40} /> },
    { name: "Vercel", icon: <SiVercel size={40} /> },
    { name: "Linux", icon: <SiLinux size={40} /> },
    { name: "Windows", icon: <FaWindows size={40} /> },
  ],
};

const techsReducer = (state = techsState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default techsReducer;
