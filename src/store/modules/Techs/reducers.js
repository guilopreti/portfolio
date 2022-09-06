import {
  SiJavascript,
  SiHtml5,
  SiCss3,
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
  SiNpm,
  SiYarn,
  SiVercel,
  SiHeroku,
  SiJsonwebtokens,
  SiWindows,
  SiLinux,
  SiGithub,
  SiInsomnia,
  SiJirasoftware,
  SiTrello,
  SiVisualstudiocode,
} from "react-icons/si";

const techsState = [
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Styled-components",
    icon: <SiStyledcomponents />,
  },
  {
    name: "NodeJS",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "TypeORM",
    icon: "TYPEORM",
  },
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "Django",
    icon: <SiDjango />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "Jest",
    icon: <SiJest />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "Npm",
    icon: <SiNpm />,
  },
  {
    name: "Yarn",
    icon: <SiYarn />,
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
  },
  {
    name: "Heroku",
    icon: <SiHeroku />,
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens />,
  },
  {
    name: "Windows",
    icon: <SiWindows />,
  },
  {
    name: "Linux",
    icon: <SiLinux />,
  },
  {
    name: "Github",
    icon: <SiGithub />,
  },
  {
    name: "Insomnia",
    icon: <SiInsomnia />,
  },
  {
    name: "Jira",
    icon: <SiJirasoftware />,
  },
  {
    name: "Trello",
    icon: <SiTrello />,
  },
  {
    name: "VSCode",
    icon: <SiVisualstudiocode />,
  },
];

const techsReducer = (state = techsState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default techsReducer;
