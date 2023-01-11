import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
