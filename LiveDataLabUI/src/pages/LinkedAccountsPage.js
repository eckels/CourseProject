import React from 'react';

import LinkedAccountCard from '../components/LinkedAccountCard';

//import '../styling/HomePage.scss';

function LinkedAccountsPage() {
  return (
    <div className="body-outer">
      <div className="body-inner">
        <h2>Linked Accounts</h2>
        <div>
          <LinkedAccountCard username="eckels" domain="github.com" time="11/22/2021" />
          <LinkedAccountCard username="eckels" domain="github.com" time="11/25/2021" />
        </div>
          <button>+ Link New Account</button>
      </div>
    </div>
  );
}

export default LinkedAccountsPage;