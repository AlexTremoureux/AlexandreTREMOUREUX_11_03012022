import React from "react";
import datas from "../datas/lodgingList";
import "../styles/LodgingList.css";
import Card from "./Card";

class LodgingList extends React.Component {
  state = datas;

  render() {
    return this.state ? (
      <div className="container_CardList">
        <ul className="cardList">
          {this.state.map((card) => (
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
