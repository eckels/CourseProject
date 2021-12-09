import React from 'react';

import Icon from '../assets/project.png';
import SubmissionList from '../lists/SubmissionList';

//import '../styling/HomePage.scss';

function ProjectView(props) {

  var completed = (props.completed == 'true') ? 'Completed' : 'Not Completed';
  var completedClass = (props.completed == 'true') ? 'green' : 'red';

  return (
    <div>
        <div>

          <div>
            <div>
              <img src={Icon} alt="Project icon" />
              <h2>{props.title}</h2>
            </div>
            <p>{props.description}</p>
            <p>Due: {props.due}</p>
            <p className={completedClass}>{completed}</p>
            <p>Started by {props.learners} learners in {props.course}</p>
          </div>

          <div>
            <button>GitHub</button>
            <button>Leaderboard</button>
          </div>

          <SubmissionList title="Project Submissions" />

        </div>
    </div>
  );
}

export default ProjectView;