import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Loginform from './components/Loginform';
import AuthPage from './components/AuthPage';

const App = () => {
  return (
    <Router>
      <div>
        <Route>
          <Route path="/" exact component={AuthPage} />
          <Route path="/home" component={Loginform} />
        </Route>
          
          {/* Add more routes for other pages */}
      </div>
    </Router>
  );
};

export default App;

