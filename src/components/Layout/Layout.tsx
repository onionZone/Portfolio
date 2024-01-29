import "./Layout.css";
import { MobileNavbar } from "./components/MobileNavbar";
import { Navbar } from "./components/Navbar";

export const config = {
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500,
};

export const Layout = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
    </>
  );
};
