import React from 'react';
import ProjectCard from '../components/ProjectCard';

//import '../styling/HomePage.scss';

import ProjectList from '../lists/ProjectList';
import SubmissionList from '../lists/SubmissionList';

function HomePage(props) {
  return (
    <div className="body-outer">
      <div className="body-inner">
        <div className="intro">
          <h5>Welcome back, {props.name}!</h5>
          <p className="desc">Continue working on...</p>
          <div className="list-grid">
            <ProjectCard title="My Project" description="description here" due="Sept 13, 2021" completed="false" learners="300" course="CS 410" />
            <ProjectCard title="My second Project" description="description here" due="Sept 17, 2021" completed="false" learners="300" course="CS 410" />
          </div>
        </div>
        <ProjectList title="Upcoming Projects" />

        <SubmissionList title="Submission History" />
      </div>
    </div>
  );
}

export default HomePage;
