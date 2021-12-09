import React from 'react';

//import '../styling/HomePage.scss';

import SubmissionCard from '../components/SubmissionCard';

function SubmissionList(props) {
  return (
    <div className="list-div">
      <div>
        <h4>{props.title}</h4>
        <div className="list-grid">
          <SubmissionCard name="MP3" url="github.com/myname/mp3.git" number="4" time="10:58, Sept 12, 2021" status="Success" />
          <SubmissionCard name="MP3" url="github.com/myname/mp3.git" number="3" time="10:56, Sept 12, 2021" status="Success" />
          <SubmissionCard name="MP3" url="github.com/myname/mp3.git" number="2" time="10:53, Sept 12, 2021" status="Failed" />
          <SubmissionCard name="MP3" url="github.com/myname/mp3.git" number="1" time="10:51, Sept 12, 2021" status="Failed" />
        </div>
      </div>
    </div>
  );
}

export default SubmissionList;