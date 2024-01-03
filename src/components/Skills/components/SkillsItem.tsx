import "./SkillsItem.css";

export interface SkillsItemProps {
  name: string;
  level: string;
  image: string;
}

export const SkillsItem = ({ name, level, image }: SkillsItemProps) => {
  const style = {
    width: level + "%",
    backgroundColor: "#333333",
  };

  return (
    <div className="skill-item">
      <img src={image} alt={name} />
      <div className="bar">
        <div className={`bar-label ${name.toLowerCase()}`} style={style}>
          {level}
        </div>
      </div>
      <div className="skill-name">{name}</div>
    </div>
  );
};
