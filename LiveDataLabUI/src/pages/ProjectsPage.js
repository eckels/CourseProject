import React from 'react';

//import '../styling/HomePage.scss';

import ProjectList from '../lists/ProjectList';

function ProjectsPage() {
  return (
    <div className="body-outer">
      <div className="body-inner">
        <h2>View Projects</h2>
        <ProjectList title="Project's you've started" />
        <ProjectList title="Upcoming Projects" />
        <ProjectList title="All Projects" />
      </div>
    </div>
  );
}

export default ProjectsPage;