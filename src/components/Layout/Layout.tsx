import { Link } from "react-scroll";
import home from "../../assets/img/home.svg";
import "./Layout.css";

export const Layout = () => {
  const linkConfig = {
    spy: true,
    smooth: true,
    offset: 50,
    duration: 500,
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"home"} {...linkConfig}>
              <img src={home} alt="Home" />
            </Link>
          </li>
          <li>
            <Link to={"about"} {...linkConfig}>
              About
            </Link>
          </li>
          <li>
            <Link to={"experience"} {...linkConfig}>
              Experience
            </Link>
          </li>
          <li>
            <Link to={"skills"} {...linkConfig}>
              Skills
            </Link>
          </li>
          <li>
            <Link to={"portfolio"} {...linkConfig}>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
