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
          <Link to="users">Kullanıcılar</Link>
        </li>
        <li>
          <Link to="app">Uygulama</Link>
        </li>
        <li>
          <Link to="suggestions">Öneriler</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
