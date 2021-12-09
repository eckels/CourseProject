import React from 'react';

import Edit from '../assets/edit.png';
import Delete from '../assets/cancel.svg';

//import '../styling/HomePage.scss';

function LinkedAccountCard(props) {
  return (
    <div className="card account-card">
        <div className="row">
          <div>
            <p className="p-title">{props.username} - <span style={{fontWeight: 400}}>{props.domain}</span></p>
            <p className="p-gray">Account linked on: {props.time}</p>
          </div>
          <div className="icons">
            <img src={Edit} alt="Edit icon" />
            <img src={Delete} alt="Delete icon" />
          </div>
        </div>
    </div>
  );
}

export default LinkedAccountCard;