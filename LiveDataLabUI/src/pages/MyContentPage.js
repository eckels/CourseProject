import React from 'react';
import CourseList from '../lists/CourseList';
import ProjectList from '../lists/ProjectList';

//import '../styling/HomePage.scss';

function MyContentPage() {
  return (
    <div className="body-outer">
      <div className="body-inner">
          <h2>My Content</h2>
          <CourseList title="My Courses" />
          <ProjectList title="My Projects" />
        </div>
    </div>
  );
}

export default MyContentPage;