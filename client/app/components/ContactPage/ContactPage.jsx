import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div id='cp-container' >
      <NavBar whereAmI='contactPage' />
      <div id='cp-content' >
        <h1>CONTACT PAGE</h1>
      </div>
    </div>
  );
};

export default ContactPage;