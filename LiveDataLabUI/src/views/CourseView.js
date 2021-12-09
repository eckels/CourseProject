import React from 'react';

import Icon from '../assets/course.png';
import ProjectList from '../lists/ProjectList';

//import '../styling/HomePage.scss';

function CourseView(props) {
  return (
    <div>
        <div>

          <div>
            <div>
              <img src={Icon} alt="Course icon" />
              <h2>{props.title}</h2>
            </div>
            <p>{props.semester}</p>
            <p>{props.description}</p>
            <p>{props.projects} projects in this course</p>
          </div>

          <ProjectList title="Projects in this Course" />

          <div>
            <button>GitHub</button>
            <button>Leaderboard</button>
          </div>

        </div>
    </div>
  );
}

export default CourseView;