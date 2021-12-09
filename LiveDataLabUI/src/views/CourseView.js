import React from 'react';

import Icon from '../assets/course.png';
import ProjectList from '../lists/ProjectList';

//import '../styling/HomePage.scss';

function CourseView(props) {
  return (
    <div className="body-outer">
      <div className="body-inner">

          <div className="view-container">
            <div className="title-view-div">
              <img src={Icon} alt="Course icon" />
              <h2>{props.title}</h2>
            </div>
            <p className="p-gray">{props.semester}</p>
            <p className="p-big">{props.description}</p>
            <p className="p-highlight">{props.projects} projects in this course</p>
          </div>

          <ProjectList title="Projects in this Course" />

        </div>
    </div>
  );
}

export default CourseView;