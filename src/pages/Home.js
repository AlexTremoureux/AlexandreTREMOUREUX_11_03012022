import React from "react";
import Illustration from "../components/illustration";
import LodgingList from "../components/LodgingList";
import data from "../data/lodgingList";
import imgHomePage from "../assets/IMG.jpg";

class Home extends React.Component {
  render() {
    return (
      <>
        <Illustration
          imgSrc={imgHomePage}
          title="Chez vous, partout et ailleurs"
        />
        <LodgingList data={data} />
      </>
    );
  }
}
export default Home;
