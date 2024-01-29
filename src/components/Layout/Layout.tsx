import "./Layout.css";
import { MobileNavbar } from "./components/MobileNavbar";
import { Navbar } from "./components/Navbar";

export const Layout = () => {
  const linkConfig = {
    spy: true,
    smooth: true,
    offset: 50,
    duration: 500,
  };
  return (
    <>
      <Navbar config={linkConfig} />
      <MobileNavbar config={linkConfig} />
    </>
  );
};
