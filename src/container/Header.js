import React from "react";
import Nav from "../components/Nav";
import Title from "../components/Title";
import "../styles/Header.css";


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
