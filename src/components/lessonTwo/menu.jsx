import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="menu">
        <li>
          <Link onClick={() => navigate(-1)}>Geri</Link>
        </li>
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
