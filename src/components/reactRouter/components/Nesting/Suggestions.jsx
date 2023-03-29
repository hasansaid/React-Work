import React from "react";
import { Outlet, Route, Routes } from "react-router";
import { Link, useRouteMatch } from "react-router-dom";
import Sug from "./Sug";
import SugTwo from "./SugTwo";

const Suggestions = () => {
  // let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Suggestions</h2>
      <ul>
        <li>
          <Link to={`sug`}> Öneri 1</Link>
        </li>
        <li>
          <Link to={`sugTwo`}> Öneri 2</Link>
        </li>
      </ul>
      <Outlet />
      {/* <Routes>
        <Route path={`sug`} element={<Sug />}></Route>
        <Route path={`sugTwo`} element={<SugTwo />}></Route>
      </Routes> */}
    </div>
  );
};

export default Suggestions;
