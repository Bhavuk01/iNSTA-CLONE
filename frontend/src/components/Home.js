import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo" />
          <div className="form-data">
            <form action="">
              <div className="logo">
                <h1>Photogram</h1>
              </div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input type="password" placeholder="Password" />
              <button className="form-btn" type="submit">
                Log in
              </button>
              <span className="has-separator">Or</span>
              <a href="#" className="facebook-login">
                <i className="fab fa-facebook" /> Log in with Facebook
              </a>
              <a className="password-reset">
              <Link to="/Forgot">Forgot password?</Link>
              </a>
            </form>
            <div className="sign-up">
              Don't an account? <Link to="/signup">Sign up</Link>
            </div>
            <div className="get-the-app">
              <span>Get the app</span>
              <div className="badge">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt="android App"
                />
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt="ios app"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
