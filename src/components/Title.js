import React from "react";
import logo from "../assets/logo.svg";
import "../styles/Title.css";

class Title extends React.Component {
  render() {
    const logo_Kasa = <img src={logo} alt="logo Kasa" className="kasa-logo" />;
    return <h1 className="kasa_banner">K{logo_Kasa}sa</h1>;
  }
}

export default Title;
