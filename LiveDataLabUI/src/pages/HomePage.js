import React from 'react';

//import '../styling/HomePage.scss';

import ProjectList from '../lists/ProjectList';
import SubmissionList from '../lists/SubmissionList';

function HomePage() {
  return (
    <div>
        <h4>Welcome, Evan!</h4>
        <ProjectList />
        <ProjectList />

        <SubmissionList />
    </div>
  );
}

export default HomePage;
