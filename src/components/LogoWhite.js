import React from "react";
import LOGOW from "../assets/LOGOW.svg";

class LogoWhite extends React.Component {
  render() {
    const logo_Kasa = <img src={LOGOW} alt="logo Kasa" className="kasa-logo" />;
    return <h1 className="kasa_banner">{logo_Kasa}</h1>;
  }
}

export default LogoWhite;
