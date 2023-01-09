import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="menu">
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="users-two">Kullanıcılar</Link>
        </li>
        <li>
          <Link to="contact">İletişim</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
