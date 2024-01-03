import React from 'react';
import Signin from './components/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import Home from './components/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signin/>} /> {/* Use "element" instead of "component" */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
};

export default App;



