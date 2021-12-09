import React from 'react';

//import '../styling/HomePage.scss';

import ProjectList from '../lists/ProjectList';
import SubmissionList from '../lists/SubmissionList';

function HomePage(props) {
  return (
    <div className="body-outer">
      <div className="body-inner">
        <h4>Welcome, {props.name}!</h4>
        <ProjectList title="Projects you've started" />
        <ProjectList title="Upcoming Projects" />

        <SubmissionList title="Submission History" />
      </div>
    </div>
  );
}

export default HomePage;
