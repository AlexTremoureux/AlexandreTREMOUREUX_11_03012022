import "../styles/Carousel.css";
import nextSlideIcon from "../assets/nextSlideIcon.svg";
import previousSlideIcon from "../assets/previousSlideIcon.svg";
import { useState } from "react";

const Carousel = (props) => {
  const [index, setNewIndex] = useState(0);
  const lastIndex = props.imgBank.length - 1;
  // Si nous sommes sur la 1ère image (index = 0) retour à la dernière image de la gallerie (lastIndex)
  const resetIndexBackward = index === 0;
  // Si nous sommes sur la dernière image (index = lastIndex) retour à la 1ère image de la gallerie (index = 0)
  const resetIndexForward = index === lastIndex;

  // ligne 23 ternaire: si + d'une image présence d'icône précédent et suivant, sinon pas d'icône
  return (
    <div className="Carousel">
      <div className="currentImage_Wrapper">
        <img className="currentImage_Img" src={props.imgBank[index]} alt="" />
      </div>
      <p className="counter">
        {index + 1}/{props.imgBank.length}
      </p>
      {props.imgBank.length > 1 ? (
        <div className="CarouselIcon">
          <div
            className="previousSlideIcon"
            onClick={() => {
              const newIndex = resetIndexBackward ? lastIndex : index - 1;
              setNewIndex(newIndex);
            }}
          >
            <img src={previousSlideIcon} alt="icone précédent" />
          </div>
          <div
            className="nextSlideIcon"
            onClick={() => {
              const newIndex = resetIndexForward ? 0 : index + 1;
              setNewIndex(newIndex);
            }}
          >
            <img src={nextSlideIcon} alt="icone suivant" />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Carousel;
