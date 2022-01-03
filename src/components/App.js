import React from "react";
import reactDom from "react-dom";
import "../styles/App.css";
import Header from "./Header";
import Illustration from "./illustration";
import LodgingList from "./LodgingList";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Illustration />
        <LodgingList />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
reactDom.render(<App />, rootElement);

export default App;
