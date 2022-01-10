import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="kasa_Nav">
            <li>
              <NavLink
                to="/"
                style={isActive => ({
                  textDecoration: isActive ? "underline" : "none"
                })}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/a-propos"
                style={isActive => ({
                  textDecoration: isActive ? "underline" : "none"
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
