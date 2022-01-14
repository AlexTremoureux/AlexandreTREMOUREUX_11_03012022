import "../styles/LodgingList.css";
import Card from "./Card";

const LodgingList = (props) => {
  return props.data ? (
    <div className="container_CardList">
      <ul className="cardList">
        {props.data.map((card) => (
          <Card key={card.id} item={card} />
        ))}
      </ul>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default LodgingList;
