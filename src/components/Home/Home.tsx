import me from "../../../public/img/me.png";
import "./Home.css";

export const Home = () => {
  return (
    <div id="home" className="container">
      <img src={me} alt="My photo" />
      <div className="name">
        Jakub <strong>Cebula</strong>
      </div>
      <div className="proffesion">
        <p>{"<frontend developer />"}</p>
      </div>
      <div className="download">
        <a href="./public/cv.pdf" download>
          Download
        </a>
      </div>
    </div>
  );
};
