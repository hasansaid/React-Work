import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="">Anasayfa</Link>
        </li>
        <li>
          <Link to="about">Hakkında</Link>
        </li>
        <li>
          <Link to="app">Uygulama</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
