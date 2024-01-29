import { ExperienceItem } from "./components/ExperienceItem";
import { config } from "./config/config";
import "./Experience.css";

export const Experience = () => {
  const items = config.map((item) => <ExperienceItem {...item} />);
  return (
    <div id="experience" className="container">
      <h1>Experience</h1>
      <div className="exp">{items}</div>
    </div>
  );
};
