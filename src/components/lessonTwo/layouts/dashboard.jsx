import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../miniproject/menu";

const Dashboard = () => {
  return (
    <div>
      <Menu />
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
