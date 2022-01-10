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
    const lastIndex = this.props.imgBank.length - 1;
    const resetIndex = index === 0;
    const newIndex = resetIndex ? lastIndex : index - 1;

    this.setState({
      index: newIndex,
    });
  };

  nextSlide = () => {
    const { index } = this.state;
    const lastIndex = this.props.imgBank.length - 1;
    const resetIndex = index === lastIndex;
    const newIndex = resetIndex ? 0 : index + 1;

    this.setState({
      index: newIndex,
    });
  };

  render() {
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
            <img
              src={previousSlideIcon}
              alt="icone précédent"
              className="previousSlideIcon"
              onClick={() => this.previousSlide()}
            />
            <img
              src={nextSlideIcon}
              alt="icone suivant"
              className="nextSlideIcon"
              onClick={() => this.nextSlide()}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Carousel;
