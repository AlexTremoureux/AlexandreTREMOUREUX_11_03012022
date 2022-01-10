import React from "react";
import "../styles/LodgingList.css";
import Card from "./Card";

class LodgingList extends React.Component {
  render() {
    return this.props.data ? (
      <div className="container_CardList">
        <ul className="cardList">
          {this.props.data.map((card) => (
            <Card key={card.id} item={card} />
          ))}
        </ul>
      </div>
    ) : (
      <div>Loading</div>
    );
  }
}

export default LodgingList;
