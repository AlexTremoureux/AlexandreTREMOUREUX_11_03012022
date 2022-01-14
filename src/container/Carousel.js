import React from "react";
import "../styles/Carousel.css";
import nextSlideIcon from "../assets/nextSlideIcon.svg";
import previousSlideIcon from "../assets/previousSlideIcon.svg";

class Carousel extends React.Component {
  state = {
    index: 0,
  };

  previousSlide = () => {
    const { index } = this.state;
    // Si nous sommes sur la 1ère image (index = 0) retour à la dernière image de la gallerie (lastIndex)
    const lastIndex = this.props.imgBank.length - 1;
    const resetIndex = index === 0;
    const newIndex = resetIndex ? lastIndex : index - 1;

    this.setState({
      index: newIndex,
    });
  };

  nextSlide = () => {
    const { index } = this.state;
    // Si nous sommes sur la dernière image (index = lastIndex) retour à la 1ère image de la gallerie (index = 0)
    const lastIndex = this.props.imgBank.length - 1;
    const resetIndex = index === lastIndex;
    const newIndex = resetIndex ? 0 : index + 1;

    this.setState({
      index: newIndex,
    });
  };

  render() {
    // ligne 49 ternaire: si + d'une image présence d'icône précédent et suivant, sinon pas d'icône
    return (
      <div className="Carousel">
        <div className="currentImage_Wrapper">
          <img
            className="currentImage_Img"
            src={this.props.imgBank[this.state.index]}
            alt=""
          />
        </div>
        <p className="counter">
          {this.state.index + 1}/{this.props.imgBank.length}
        </p>
        {this.props.imgBank.length > 1 ? (
          <div className="CarouselIcon">
            <div className="previousSlideIcon" onClick={() => this.previousSlide()}>
              <img
                src={previousSlideIcon}
                alt="icone précédent"
              />
            </div>
            <div className="nextSlideIcon" onClick={() => this.nextSlide()}>
              <img
                src={nextSlideIcon}
                alt="icone suivant"
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Carousel;
