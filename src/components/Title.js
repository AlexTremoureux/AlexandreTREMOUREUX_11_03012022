import React from "react";
import LOGO from "../assets/LOGO.svg";

class Title extends React.Component {
  render() {
    const logo_Kasa = <img src={LOGO} alt="logo Kasa" className="kasa-logo" />;
    return <h1 className="kasa_banner">{logo_Kasa}</h1>;
  }
}

export default Title;
