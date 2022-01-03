import React from "react";
import IMG from "../assets/IMG.jpg";
import "../styles/Illustration.css";

class Illustration extends React.Component {
  render() {
    return (
      <div className="illustration" style={{ backgroundImage: `url(${IMG})` }}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    );
  }
}

export default Illustration;
