import React from "react";
import "../styles/Nav.css";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul className="kasa_Nav">
          <li>
            <p>Accueil</p>
          </li>
          <li>
            <p>A Propos</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
