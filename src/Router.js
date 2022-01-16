import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import Page404 from "./pages/Page404";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lodging/:id" element={<Lodging />}></Route>
        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default Router;
