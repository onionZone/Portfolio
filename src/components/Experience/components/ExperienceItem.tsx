import "./ExperienceItem.css";
interface ExpirienceItemProps {
  title: string;
  date: string;
  image: string;
}

export const ExperienceItem = ({ title, date, image }: ExpirienceItemProps) => {
  return (
    <div className="expirience-item">
      <img src={image} />
      <div className="proffesion-title">{title}</div>
      <div className="proffesion-date">{date}</div>
    </div>
  );
};
