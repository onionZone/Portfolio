import { Link } from "react-scroll";
import home from "../../../assets/img/home.svg";

export const Navbar = ({ config }) => {
  return (
    <div className={"desktop-nav"}>
      <nav>
        <ul>
          <li>
            <Link to={"home"} {...config}>
              <img src={home} alt="Home" />
            </Link>
          </li>
          <li>
            <Link to={"about"} {...config}>
              About
            </Link>
          </li>
          <li>
            <Link to={"experience"} {...config}>
              Experience
            </Link>
          </li>
          <li>
            <Link to={"skills"} {...config}>
              Skills
            </Link>
          </li>
          <li>
            <Link to={"portfolio"} {...config}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to={"contact"} {...config}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
