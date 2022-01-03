import React from "react";
import datas from "../datas/lodgingList";
import "../styles/LodgingList.css";

class LodgingList extends React.Component {
  render() {
    return (
      <div className="container_CardList">
        <ul className="cardList">
          {datas.map((card) => (
            <li
              key={`${card.id}`}
              style={{ backgroundImage: `url(${card.cover})` }}
            >
              <a href="#">{card.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LodgingList;
