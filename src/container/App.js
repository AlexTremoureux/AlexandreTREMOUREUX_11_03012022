import React from "react";
import reactDom from "react-dom";
import "../styles/App.css";
import Home from "../pages/Home";

class App extends React.Component {
  render() {
    return (
      <>
        <Home />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
reactDom.render(<App />, rootElement);

export default App;
