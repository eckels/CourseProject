import React from 'react';

//import '../styling/HomePage.scss';

function SubmissionCard(props) {

  var statusClass = (props.status == 'Success') ? 'green' : 'red';

  return (
    <div className="card submission-card">
        <div>
          <p className="p-black"><span style={{fontWeight: 'bold'}}>{props.name}</span> - {props.url}</p>
          <p className="p-label">Submission {props.number} at {props.time}</p>
          <p className="p-label">Status: <span className={statusClass}>{props.status}</span></p>
        </div>
    </div>
  );
}

export default SubmissionCard;