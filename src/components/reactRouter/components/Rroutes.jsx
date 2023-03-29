import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import PhoneBookApp from "../../phoneBookApp/PhoneBookApp";
import About from "./About";
import Home from "./Home";
import Sug from "./Nesting/Sug";
import Suggestions from "./Nesting/Suggestions";
import SugTwo from "./Nesting/SugTwo";
import NotFound from "./NotFound";
import User from "./User";
import Users from "./Users";
const Rroutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
        <Route path="/app" element={<PhoneBookApp />} />
        <Route path="/suggestions" element={<Suggestions />}>
          <Route path="sug" element={<Sug />}></Route>
          <Route path="sugTwo" element={<SugTwo />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Rroutes;
