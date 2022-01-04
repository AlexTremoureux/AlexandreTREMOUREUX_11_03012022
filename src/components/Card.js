import React from "react";

class Card extends React.Component {
  render() {
    return (
      <li
        key={`${this.props.key}`}
        style={{
          background: `url(${this.props.item.cover})`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <p>{this.props.item.title}</p>
        </div>
      </li>
    );
  }
}

export default Card;
