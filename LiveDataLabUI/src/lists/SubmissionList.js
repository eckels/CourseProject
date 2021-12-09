import React from 'react';

//import '../styling/HomePage.scss';

import SubmissionCard from '../components/SubmissionCard';

function SubmissionList(props) {
  return (
    <div className="list-div">
      <div>
        <h4>{props.title}</h4>
        <div className="list-grid">
          {props.data.map(item => (
            <SubmissionCard name={item.name} url={item.url} number={item.number} time={item.time} status={item.status} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubmissionList;