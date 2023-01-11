import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles.css";

const Auth = () => {
  return (
    <div className="auth-container">
      Auth
      <div id="auth-menu">
        <Link to="/auth">Giriş Yap</Link>
        <Link to="/auth/register">Kayıt Ol</Link>
      </div>
    </div>
  );
};

export default Auth;
