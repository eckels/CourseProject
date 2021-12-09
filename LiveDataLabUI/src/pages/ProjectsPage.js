import React from 'react';

//import '../styling/HomePage.scss';

import ProjectList from '../lists/ProjectList';

function ProjectsPage(props) {
  return (
    <div className="body-outer">
      <div className="body-inner">
        <h2>View Projects</h2>
        <ProjectList title="Project's you've started" data={props.recent} />
        <ProjectList title="Upcoming Projects" data={props.upcoming} />
        <ProjectList title="All Projects" data={props.all} />
      </div>
    </div>
  );
}

export default ProjectsPage;