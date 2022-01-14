import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <li
      style={{
        background: `url(${props.item.cover})`,
        backgroundSize: "cover",
      }}
    >
      <Link
        className="card_link"
        key={`${props.item.id}`}
        to={`/lodging/${props.item.id}`}
      >
        <p>{props.item.title}</p>
      </Link>
    </li>
  );
};

export default Card;
