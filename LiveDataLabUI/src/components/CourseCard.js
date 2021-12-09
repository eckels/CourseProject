import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../assets/course.png';

//import '../styling/HomePage.scss';

function CourseCard(props) {
  return (
    <Link to="/view-course"><div className="card course-card">
        <div>
          <div className="title-div">
            <img src={Icon} alt="Course icon" />
            <p className="p-title">{props.title}</p>
          </div>
          <p className="p-label">{props.semester}</p>
          <p className="p-black">{props.description}</p>
          <p className="p-label">Started by {props.learners} learners</p>
          <p className="p-label">{props.projects} projects in this course</p>
        </div>
    </div></Link>
  );
}

export default CourseCard;