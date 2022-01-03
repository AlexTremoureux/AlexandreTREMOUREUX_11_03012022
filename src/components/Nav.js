import React from "react";
import "../styles/Nav.css";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul className="kasa_Nav">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">A Propos</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
