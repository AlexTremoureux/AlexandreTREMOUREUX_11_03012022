import React from "react";
import CollapseTop from "../assets/CollapseTop.svg";
import "../styles/Collapse.css";

class Collapse extends React.Component {
  state = {
    isCollapsed: false,
  };

  // Changement du State et ajout de classe css pour inverser l'icone
  toggleList = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  // Création des éléments HTML en fonction de la propriété
  handlePropTypes = () => {
    if (this.props.description) {
      return (
        <p className="Collapse__description__details">
          {this.props.description}
        </p>
      );
    }
    return (
      <ul className="Collapse__equipments__details">
        {this.props.equipments.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className={`Collapse`} onClick={this.toggleList}>
        <div id={this.props.id} className="Collapse__title-wrapper">
          <h3 id="Collapse__title">{this.props.title}</h3>
          <img
            src={CollapseTop}
            alt=""
            className={`Collapse__icon Collapse${
              this.state.isCollapsed ? "-open" : "-close"
            }`}
          />
        </div>
        {this.state.isCollapsed && this.handlePropTypes()}
      </div>
    );
  }
}

export default Collapse;
