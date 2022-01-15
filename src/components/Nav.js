import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul className="kasa_Nav">
          <li className="kasa_Nav_listOfLink">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "kasa_Nav_link" + (isActive ? " activated" : "")
              }
            >
              Accueil
            </NavLink>
          </li>
          <li className="kasa_Nav_listOfLink">
            <NavLink
              to="a-propos"
              className={({ isActive }) =>
                "kasa_Nav_link" + (isActive ? " activated" : "")
              }
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
