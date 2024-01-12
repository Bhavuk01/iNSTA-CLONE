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
        <a href="/post"><img src="https://static.thenounproject.com/png/4374665-200.png" alt="Createpost" /></a>
      </div>
    </nav>
    <div className="card">

            {/*card Header*/}
            <div className="card-header">
                <div className="card-pic">
                    <img src="https://rukminim2.flixcart.com/image/850/1000/l4iscy80/poster/t/1/5/small-sidhu-moose-wala-punjabi-singer-poster-multicolor-photo-original-imagfedrzf7hwuku.jpeg?q=90" alt="" />
                </div>
                <div className="user-info">
                    <h2>Sidhu Moosse Wala</h2>
                </div>
            </div>
            {/*card image*/}
            <div className="card-image">
                <img src="https://yt3.googleusercontent.com/ytc/AIf8zZSRjNnh2jihP3qt_l-eyiKoli5iXIH58Sey248iRw=s900-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            {/*card content*/}
            <div className="card-content">
            <span className="material-symbols-outlined">favorite</span>
            <p>1 Like</p>
            <p>This is amzing</p>
             </div>
             {/*add comment*/}
             <div className="add-comment">
             <span className="material-symbols-outlined">mood</span> 
             <input type="text" placeholder='add a comments' />
             <button className='comment'>Post</button>
             </div>
        </div>
        
    </div>

  )
}

export default Home
