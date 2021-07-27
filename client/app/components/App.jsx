import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage.jsx';
import MyWorkPage from './MyWorkPage/MyWorkPage.jsx';
import ContactPage from './ContactPage/ContactPage.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path="/" exact >
          <LandingPage />
        </Route>

        <Route path="/my-work" exact >
          <MyWorkPage />
        </Route>

        <Route path="/contact" exact >
          <ContactPage />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;