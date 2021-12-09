import React from 'react';

//import '../styling/HomePage.scss';

import CourseList from '../lists/CourseList';

function CoursesPage() {
  return (
    <div className="body-outer">
      <div className="body-inner">
        <h2>View Courses</h2>
        <CourseList title="Your Courses" />
        <CourseList title="All Courses" />
      </div>
    </div>
  );
}

export default CoursesPage;