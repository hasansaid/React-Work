import React, { useState } from "react";
import Course from "../reactState/component/Course";
import "./styles.css";

function getRandomCourse() {
  const courseArray = ["Angular", "Csharp", "Bootstrap", "KompleWeb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

const ReactState = () => {
  const [courses, setCourses] = useState([]);
  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });
  return (
    <div className="rStateMain">
      {/* <button className="reactStateButton" onClick={handleClick}>
        Kurs Ekle
      </button> */}
      <button className="button-64" onClick={handleClick}>
        <span className="text">Kurs Ekle</span>
      </button>
      <div className="rStateCourse">{courseList}</div>
    </div>
  );
};

export default ReactState;
