import React from "react";
import reactDom from "react-dom";
import "../styles/App.css";
import Home from "../pages/Home";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import Page404 from "../pages/Page404";
import { BrowserRouter } from "react-router-dom";
import Lodging from "../pages/Lodging";




//<Route path="/locations/id:"  render={(match) => <Location id={match.params.id} />} />


class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lodging/:id" exact component={Lodging}></Route>
            <Route path="/a-propos" exact component={About} />
            <Route path="*"  component={Page404} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
reactDom.render(<App />, rootElement);

export default App;
