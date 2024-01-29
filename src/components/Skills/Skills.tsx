import { SkillsItem } from "./components/SkillsItem";
import { config } from "./config/config";
import "./Skills.css";

export const Skills = () => {
  const items = config.map((item) => <SkillsItem {...item} />);

  return (
    <div id="skills" className="container">
      <h1>Skills</h1>
      <div className="skills">{items}</div>
    </div>
  );
};
