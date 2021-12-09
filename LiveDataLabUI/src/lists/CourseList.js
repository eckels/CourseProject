import React from 'react';

//import '../styling/HomePage.scss';

import CourseCard from '../components/CourseCard';

function CourseList(props) {
  return (
    <div>
      <div>
        <h4>{props.title}</h4>
        <div className="list-grid">
          <CourseCard title="My course" semester="Fall 2021" description="description here" learners="300" projects="32" />
          <CourseCard title="My course" semester="Fall 2021" description="description here" learners="300" projects="32" />
          <CourseCard title="My course" semester="Fall 2021" description="description here" learners="300" projects="32" />
          <CourseCard title="My course" semester="Fall 2021" description="description here" learners="300" projects="32" />
        </div>
      </div>
    </div>
  );
}

export default CourseList;