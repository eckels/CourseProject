import React from 'react';

//import '../styling/HomePage.scss';

import CourseList from '../lists/CourseList';

function CoursesPage(props) {
  return (
    <div className="body-outer">
      <div className="body-inner">
        <h2>View Courses</h2>
        <CourseList title="Your Courses" data={props.yourCourses} />
        <CourseList title="All Courses" data={props.allCourses} />
      </div>
    </div>
  );
}

export default CoursesPage;