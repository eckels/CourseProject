import React from 'react';

import LinkedAccountCard from '../components/LinkedAccountCard';

//import '../styling/HomePage.scss';

function LinkedAccountsPage(props) {
  return (
    <div className="body-outer">
      <div className="body-inner">
        <h2>Linked Accounts</h2>
        <div style={{marginBottom: '24px'}}>
          {props.accounts.map(item => (
            <LinkedAccountCard username={item.username} domain={item.domain} time={item.time} />
          ))}
        </div>
          <button>Link New Account</button>
      </div>
    </div>
  );
}

export default LinkedAccountsPage;