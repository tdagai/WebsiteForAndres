import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import './MyWorkPage.css';

const MyWorkPage = () => {
  return (
    <div id='mwp-container' >
      <NavBar whereAmI='myWorkPage' />
      <div id='mwp-content' >
        <h1>MY WORK PAGE</h1>
      </div>
    </div>
  );
};

export default MyWorkPage;