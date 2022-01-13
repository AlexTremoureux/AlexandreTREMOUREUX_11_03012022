import React from "react";
import LegalNotice from "../components/LegalNotice";
import LogoWhite from "../components/LogoWhite";
import "../styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <LogoWhite />
        <LegalNotice />
      </div>
    );
  }
}

export default Footer;
