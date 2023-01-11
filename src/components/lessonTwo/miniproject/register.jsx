import React from "react";

const Register = () => {
  return (
    <div>
      <h2>REGISTER:</h2>
      <input
        style={{ marginRight: "3px" }}
        type="text"
        placeholder="email giriniz.."
      />
      <input type={"password"} placeholder="şifre giriniz.." />
    </div>
  );
};

export default Register;
