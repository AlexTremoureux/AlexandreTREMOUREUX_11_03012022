import "../styles/App.css";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import Page404 from "../pages/Page404";
import Lodging from "../pages/Lodging";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lodging/:id" element={<Lodging />}></Route>
        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
