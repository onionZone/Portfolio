interface Skill {
  name: string;
  level: string;
  image: string;
}

export const config: Skill[] = [
  { name: "HTML", level: "80", image: "../../../../public/img/html.svg" },
  { name: "CSS", level: "90", image: "../../../../public/img/css.svg" },
  { name: "JavaScript", level: "70", image: "../../../../public/img/js.svg" },
  { name: "TypeScript", level: "70", image: "../../../../public/img/ts.svg" },
  { name: "React", level: "65", image: "../../../../public/img/react.svg" },
  { name: "Redux", level: "65", image: "../../../../public/img/redux.svg" },
  {
    name: "Bootstrap",
    level: "65",
    image: "../../../../public/img/bootstrap.svg",
  },
  { name: "SASS", level: "65", image: "../../../../public/img/sass.svg" },
  { name: "Material UI", level: "65", image: "../../../../public/img/mui.svg" },
  { name: "Cypress", level: "65", image: "../../../../public/img/cypress.svg" },
  { name: "Vitest", level: "65", image: "../../../../public/img/vitest.svg" },
  { name: "Vite", level: "65", image: "../../../../public/img/vite.svg" },
  { name: "Docker", level: "65", image: "../../../../public/img/docker.svg" },
];
