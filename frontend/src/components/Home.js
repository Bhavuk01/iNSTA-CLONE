import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="logo">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Instagram-logo-black-white-horizontal-png.png" alt="Instagram Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-icons">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" /></a>
        <a href="#"><img src="https://cdn1.iconfinder.com/data/icons/instagram-feature-outline/32/icon_instagram-22-512.png" alt="Explore" /></a>
        <a href="#"><img src="https://w7.pngwing.com/pngs/387/843/png-transparent-favorite-heart-like-likes-love-loved-basic-ui-2-line-icon.png" alt="Activity" /></a>
        <a href="/profile"><img src="https://cdn2.iconfinder.com/data/icons/instagram-outline/19/11-512.png" alt="Profile" /></a>
      </div>
    </nav>
    </div>
  )
}

export default Home
