import React, { useState } from 'react';
import './Forgot.css'
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email); // Replace this with your password reset logic
    // Send the email to your backend for password reset
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email or Username"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      <p>Enter your email or username and we'll send you a link to reset your password.</p>
      <p>Remembered your password? <a href="/login">Log in</a></p>
    </div>
  );
};

export default ForgotPasswordPage;
