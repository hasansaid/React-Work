import React from "react";
import { Routes } from "react-router";
import Menu from "./components/Menu";
import Rroutes from "./components/Rroutes";

const index = () => {
  return (
    <div>
      <Menu />
      <Rroutes />
    </div>
  );
};

export default index;
