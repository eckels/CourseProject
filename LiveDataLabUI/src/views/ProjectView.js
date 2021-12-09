import React from 'react';

import Icon from '../assets/project.png';
import CourseList from '../lists/CourseList';
import SubmissionList from '../lists/SubmissionList';

import { linkedCourse } from '../data/data';

//import '../styling/HomePage.scss';

function ProjectView(props) {

  var completed = (props.completed == 'true') ? 'Completed' : 'Not Completed';
  var completedClass = (props.completed == 'true') ? 'green' : 'red';

  return (
    <div className="body-outer">
      <div className="body-inner">

          <div className="view-container">
            <div className="title-view-div">
              <img src={Icon} alt="Project icon" />
              <h3>{props.title}</h3>
            </div>
            <p className="p-big spacer-small">{props.description}</p>
            <p className="p-gray">Due: {props.due}</p>
            <p className={`${completedClass} p-gray spacer`}>{completed}</p>
            <p className="p-highlight">Started by {props.learners} learners in {props.course}</p>
            <div className="button-view-div">
              <button>GitHub</button>
              <button>Leaderboard</button>
            </div>
          </div>

          <div className="score-container">
            <h4>Highest Score: 100%</h4>
            <p>Submission 5</p>
          </div>

          <SubmissionList title="Project Submissions" data={props.submissions} />

          <CourseList title="Associated Course" data={linkedCourse} />

        </div>
    </div>
  );
}

export default ProjectView;