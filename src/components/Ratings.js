import React from "react";
import RedStar from "../assets/RedStar.svg";
import GreyStar from "../assets/GreyStar.svg";

class Ratings extends React.Component {
  render() {
    const { numberOfStars } = this.props;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      i <= numberOfStars ? stars.push("red") : stars.push("grey");
    }

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
  }
}

export default Ratings;
