import { NavLink } from "react-router-dom";
import LOGO from "../assets/LOGO.svg";

const Title = () => {
  const logo_Kasa = <img src={LOGO} alt="logo Kasa" className="kasa-logo" />;
  return <NavLink to="/">{logo_Kasa}</NavLink>;
};

export default Title;
