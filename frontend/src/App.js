import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forgot from './Pages/Forgot';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot" component={Forgot} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;




