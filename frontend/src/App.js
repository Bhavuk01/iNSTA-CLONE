import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Forgot from './components/Forgot';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use "element" instead of "component" */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;



