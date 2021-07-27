import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path="/" exact >
          <LandingPage />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;