import React from "react";
import "../styles/Banner.css";
import Nav from "./Nav";
import Title from "./Title";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Title />
        <Nav />
      </div>
    );
  }
}

export default Header;
