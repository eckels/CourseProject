import React from 'react';

//import '../styling/HomePage.scss';

import ProjectCard from '../components/ProjectCard';

function ProjectList(props) {
  return (
    <div className="list-div">
      <div>
        <h4>{props.title}</h4>
        <div className="list-grid">
          <ProjectCard title="My Project" description="description here" due="Sept 13, 2021" completed="true" learners="300" course="CS 410" />
          <ProjectCard title="My Project 2" description="description here" due="Sept 13, 2021" completed="true" learners="500" course="CS 420" />
          <ProjectCard title="My Project" description="description here" due="Sept 13, 2021" completed="true" learners="300" course="CS 410" />
          <ProjectCard title="My Project" description="description here" due="Sept 13, 2021" completed="true" learners="300" course="CS 410" />
        </div>
      </div>
    </div>
  );
}

export default ProjectList;