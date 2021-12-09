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
          <ProjectList title="" data={props.recent} />
        </div>
        <ProjectList title="Upcoming Projects" data={props.upcoming} />

        <SubmissionList title="Submission History" data={props.submissions} />
      </div>
    </div>
  );
}

export default HomePage;
