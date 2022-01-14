import RedStar from "../assets/RedStar.svg";
import GreyStar from "../assets/GreyStar.svg";

const Ratings = (props) => {
  const { numberOfStars } = props;
  const array = Array(5).fill("grey");
  const stars = array.map((item, index) => {
    return index < numberOfStars ? "red" : "grey";
  });

  return (
    <div className="stars">
      {stars.map((star, index) =>
        star === "red" ? (
          <div key={index} className="redStar star">
            <img src={RedStar} alt="red star" />
          </div>
        ) : (
          <div key={index} className="greyStar star">
            <img src={GreyStar} alt="grey star" />
          </div>
        )
      )}
    </div>
  );
};

export default Ratings;
