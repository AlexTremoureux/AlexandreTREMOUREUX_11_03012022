import "../styles/DescriptionOfLodging.css";
import Ratings from "./Ratings";

const DescriptionOfLodging = (props) => {
  return (
    <div className="description">
      <div className="description_lodging">
        <h2 className="description_title">{props.title}</h2>
        <h3 className="description_location">
          {props.location.replace(" -", ",")}
        </h3>
        <ul className="description_tag-list">
          {props.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="description_host">
        <div className="host">
          <p className="name">{props.name}</p>
          <img className="picture" src={props.picture} alt={props.name} />
        </div>
        <Ratings numberOfStars={parseInt(props.rating)} />
      </div>
    </div>
  );
};

export default DescriptionOfLodging;
