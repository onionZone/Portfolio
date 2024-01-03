interface Skill {
  name: string;
  level: string;
  image: string;
}

export const config: Skill[] = [
  { name: "HTML", level: "80", image: "../../../../public/html.svg" },
  { name: "CSS", level: "90", image: "../../../../public/css.svg" },
  { name: "JavaScript", level: "70", image: "../../../../public/js.svg" },
  { name: "TypeScript", level: "70", image: "../../../../public/ts.svg" },
  { name: "React", level: "65", image: "../../../../public/react.svg" },
  { name: "Redux", level: "65", image: "../../../../public/redux.svg" },
  { name: "Bootstrap", level: "65", image: "../../../../public/bootstrap.svg" },
  { name: "SASS", level: "65", image: "../../../../public/sass.svg" },
  { name: "Material UI", level: "65", image: "../../../../public/mui.svg" },
  { name: "Cypress", level: "65", image: "../../../../public/cypress.svg" },
  { name: "Vitest", level: "65", image: "../../../../public/vitest.svg" },
  { name: "Vite", level: "65", image: "../../../../public/vite.svg" },
  { name: "Docker", level: "65", image: "../../../../public/docker.svg" },
];
