import React, { useState } from "react";
import CollapseTop from "../assets/CollapseTop.svg";
import "../styles/Collapse.css";

const Collapse = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Création des éléments HTML en fonction de la propriété description ou equipments
  const handlePropTypes = () => {
    if (props.description) {
      return (
        <p className="Collapse__description__details">{props.description}</p>
      );
    }
    return (
      <ul className="Collapse__equipments__details">
        {props.equipments.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className={`Collapse`} onClick={() => setIsCollapsed(!isCollapsed)}>
      <div id={props.id} className="Collapse__title-wrapper">
        <h3 id="Collapse__title">{props.title}</h3>
        <img
          src={CollapseTop}
          alt=""
          className={`Collapse__icon Collapse${
            isCollapsed ? "-open" : "-close"
          }`}
        />
      </div>
      {isCollapsed && handlePropTypes()}
    </div>
  );
};

export default Collapse;
