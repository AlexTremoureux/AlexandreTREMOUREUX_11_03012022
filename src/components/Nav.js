import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="kasa_Nav">
            <li className="kasa_Nav_listOfLink">
              <NavLink className="kasa_Nav_link"
                to="/" exact
                style={(isActive) => ({
                  textDecoration: isActive ? "underline" : "none",
                })}
              >
                Accueil
              </NavLink>
            </li>
            <li className="kasa_Nav_listOfLink">
              <NavLink className="kasa_Nav_link"
                to="/a-propos" exact
                style={(isActive) => ({
                  textDecoration: isActive ? "underline" : "none",
                })}
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
