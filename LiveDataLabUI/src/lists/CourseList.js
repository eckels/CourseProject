import React from 'react';

//import '../styling/HomePage.scss';

import CourseCard from '../components/CourseCard';

function CourseList(props) {
  return (
    <div className="list-div">
      <div>
        <h4>{props.title}</h4>
        <div className="list-grid">
          {props.data.map(item => (
            <CourseCard title={item.title} semester={item.semester} description={item.description} learners={item.learners} projects={item.projects} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseList;