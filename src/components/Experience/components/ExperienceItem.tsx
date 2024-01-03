interface ExpirienceItemProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export const ExperienceItem = ({
  title,
  date,
  description,
  image,
}: ExpirienceItemProps) => {
  return (
    <div className="expirience-item">
      <img src={image} />
      <div className="proffesion-title">{title}</div>
      <div className="proffesion-date">{date}</div>
      <div className="proffeson-description">{description}</div>
    </div>
  );
};
