import React from 'react';

import ProjectIcon from '../assets/project.png';
import CourseIcon from '../assets/course.png';
import LeaderboardIcon from '../assets/leaderboard.png';

//import '../styling/HomePage.scss';

function CreatePage() {
  return (
    <div className="body-outer">
      <div className="body-inner">
          <h2>Create New Content</h2>
          <div className="list-grid">

            <div className="create-card">
            <img src={ProjectIcon} alt="Project icon" />
              <h4>Create Project</h4>
              <p>Create a project for other students to complete.</p>
            </div>

            <div className="create-card">
              <img src={CourseIcon} alt="Course icon" />
              <h4>Create Course</h4>
              <p>Create a course for other students to take part in.</p>
            </div>

            <div className="create-card">
              <img src={LeaderboardIcon} alt="Leaderboard icon" />
              <h4>Create Leaderboard</h4>
              <p>Create a leaderboard for students to track their progress.</p>
            </div>

          </div>
        </div>
    </div>
  );
}

export default CreatePage;