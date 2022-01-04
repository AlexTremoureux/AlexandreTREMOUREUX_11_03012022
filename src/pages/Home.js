import React from "react";
import Illustration from "../components/illustration";
import LodgingList from "../components/LodgingList";
import Footer from "../container/Footer";
import Header from "../container/Header";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Illustration />
        <LodgingList />
        <Footer />
      </>
    );
  }
}
export default Home;
