import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../assets/project.png';

//import '../styling/HomePage.scss';

function ProjectCard(props) {

  var completed = (props.completed == 'true') ? 'Completed' : 'Not Completed';
  var completedClass = (props.completed == 'true') ? 'green' : 'red';

  return (
    <div className="card project-card">
        <Link to="/view-project"><div>
          <div className="title-div">
            <img src={Icon} alt="Project icon" />
            <p className="p-title">{props.title}</p>
          </div>
          <p className="p-black">{props.description}</p>
          <p className="p-label">Due: {props.due}</p>
          <p className={`p-label ${completedClass}`}>{completed}</p>
          <p className="p-label bottom">Started by {props.learners} learners in {props.course}</p>
        </div></Link>
    </div>
  );
}

export default ProjectCard;