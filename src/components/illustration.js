import React from "react";
import "../styles/Illustration.css";

class Illustration extends React.Component {
  render() {
    return (
      <div
        className="illustration"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${this.props.imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Illustration;
