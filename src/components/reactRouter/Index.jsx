import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import PhoneBookApp from "../phoneBookApp/PhoneBookApp";
import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
const index = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="app" element={<PhoneBookApp />} />
      </Routes>
    </div>
  );
};

export default index;
