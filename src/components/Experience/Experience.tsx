import { ExperienceItem } from "./components/ExperienceItem";
import { config } from "./config/config";

export const Experience = () => {
  const items = config.map((item) => <ExperienceItem {...item} />);
  return (
    <>
      <div id="experience" className="container">
        Experience
      </div>
      <div className="exp">{items}</div>
    </>
  );
};
