import React from 'react'

const Profile = () => {
  return (
    <div>
        <h1>Profile</h1>
        <p>This is the profile page. You can put whatever you want here.</p>
        <div className="card">

            {/*card Header*/}
            <div className="card-header">
                <div className="card-pic">
                    <img src="https://rukminim2.flixcart.com/image/850/1000/l4iscy80/poster/t/1/5/small-sidhu-moose-wala-punjabi-singer-poster-multicolor-photo-original-imagfedrzf7hwuku.jpeg?q=90" alt="" />
                </div>
                <div className="user-info">
                    <h2>John Doe</h2>
                    <span>@john_doe</span>
                </div>
            </div>
            {/*card image*/}
            <div className="card-image">
                <img src="https://e0.pxfuel.com/wallpapers/248/815/desktop-wallpaper-sidhu-moose-wala-black-black-background-thumbnail.jpg" alt="" />
            </div>
            {/*card content*/}
            <div className="card-content">
                <ul>
                    <li><strong>Followers:</strong> 35487</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Profile
