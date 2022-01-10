import React from "react";
import "../styles/DescriptionOfLodging.css";
import Ratings from "./Ratings";

class DescriptionOfLodging extends React.Component {
  render() {
    return (
      <div className="description">
        <div className="description_lodging">
          <h2 className="description_title">{this.props.title}</h2>
          <h3 className="description_location">
            {this.props.location.replace(" -", ",")}
          </h3>
          <ul className="description_tag-list">
            {this.props.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="description_host">
          <div className="host">
            <p className="name">{this.props.name}</p>
            <img
              className="picture"
              src={this.props.picture}
              alt={this.props.name}
            />
          </div>
          <Ratings numberOfStars={parseInt(this.props.rating)} />
        </div>
      </div>
    );
  }
}

export default DescriptionOfLodging;
