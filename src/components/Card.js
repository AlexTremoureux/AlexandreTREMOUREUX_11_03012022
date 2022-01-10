import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    return (
      <li
        //key={`${this.props.key}`}
        style={{
          background: `url(${this.props.item.cover})`,
          backgroundSize: "cover",
        }}
      >
        <Link
          key={`${this.props.item.id}`}
          to={`/lodging/${this.props.item.id}`}
        >
          <p>{this.props.item.title}</p>
        </Link>
      </li>
    );
  }
}

export default Card;
