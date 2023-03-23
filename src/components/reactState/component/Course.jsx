import React, { useState } from "react";
import "./styles.css";
import Angular from "../../../images/angular.jpg";
import Bootstrap from "../../../images/bootstrap5.png";
import Csharp from "../../../images/ccsharp.png";
import KompleWeb from "../../../images/kompleweb.jpg";

const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  Csharp: Csharp,
  KompleWeb: KompleWeb,
};

const Course = ({ courseName }) => {
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt={courseName} />
    </div>
  );
};

export default Course;
