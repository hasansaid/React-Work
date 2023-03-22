import React from "react";
import "./styles.css";

const Course = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Course;

// ffc komutu ile de açılış yapabilirim..
// function Course() {
//   return <div>Course</div>;
// }
// export default Course;
