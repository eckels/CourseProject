import React from 'react';

//import '../styling/HomePage.scss';

import ProjectCard from '../components/ProjectCard';

function ProjectList(props) {
  return (
    <div className="list-div">
      <div>
        <h4>{props.title}</h4>
        <div className="list-grid">
          {props.data.map(item => (
            <ProjectCard title={item.title} description={item.description} due={item.due} completed={item.completed} learners={item.learners} course={item.course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;