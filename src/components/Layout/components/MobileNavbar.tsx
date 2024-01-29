import { Link } from "react-scroll";
import hamburger from "../../../assets/img/hamburger.svg";
import home from "../../../assets/img/home.svg";
import { config } from "../Layout";

export const MobileNavbar = () => {
  return (
    <div className="mobile-nav">
      <nav>
        <button className="hamburger">
          <img src={hamburger} alt="hamburger" />
        </button>
        <div className="dropdown">
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
        </div>
      </nav>
    </div>
  );
};
