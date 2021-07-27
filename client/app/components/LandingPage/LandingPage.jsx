import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div id='lp-container' >
      <NavBar whereAmI='landingPage' />
      <div id='lp-content' >
        <h1>LANDING PAGE</h1>
      </div>
    </div>
  );
};

export default LandingPage;