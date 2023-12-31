import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Authentication App</h1>
      <p>Please select an option:</p>
      <div>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/forgot-password">
          <button>Forgot Password</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
