import htmlLogo from "../../../assets/img/html.svg";
import cssLogo from "../../../assets/img/css.svg";
import jsLogo from "../../../assets/img/js.svg";
import tsLogo from "../../../assets/img/ts.svg";
import reactLogo from "../../../assets/img/react.svg";
import reduxLogo from "../../../assets/img/redux.svg";
import bootstrapLogo from "../../../assets/img/bootstrap.svg";
import sassLogo from "../../../assets/img/sass.svg";
import muiLogo from "../../../assets/img/mui.svg";
import vitestLogo from "../../../assets/img/vitest.svg";
import viteLogo from "../../../assets/img/vite.svg";
import cypressLogo from "../../../assets/img/cypress.svg";
import dockerLogo from "../../../assets/img/docker.svg";

interface Skill {
  name: string;
  level: string;
  image: string;
}

export const config: Skill[] = [
  { name: "HTML", level: "80", image: htmlLogo },
  { name: "CSS", level: "90", image: cssLogo },
  { name: "JavaScript", level: "70", image: jsLogo },
  { name: "TypeScript", level: "70", image: tsLogo },
  { name: "React", level: "65", image: reactLogo },
  { name: "Redux", level: "65", image: reduxLogo },
  { name: "Bootstrap", level: "65", image: bootstrapLogo },
  { name: "SASS", level: "65", image: sassLogo },
  {
    name: "Material UI",
    level: "65",
    image: muiLogo,
  },
  {
    name: "Cypress",
    level: "65",
    image: cypressLogo,
  },
  { name: "Vitest", level: "65", image: vitestLogo },
  { name: "Vite", level: "65", image: viteLogo },
  { name: "Docker", level: "65", image: dockerLogo },
];
