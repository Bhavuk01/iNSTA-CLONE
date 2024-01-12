import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
    <div className="profile">
        {/* Profile frame */}
        <div className="profile-frame">
            <div className="profile-pic">
               <img src="https://i.pinimg.com/originals/55/a0/ab/55a0ab1054f257b61efed032c9bbc85c.jpg" alt="" /> 
            </div>  
            <div className="profile-data">
                <h1>Sidhu Moosewala</h1>
                <div className="profile-info">
                    <p>40 posts</p>
                    <p>40 follwers</p>
                    <p>40 following</p>
                </div>
            </div>
        </div>

        <hr style={{
          width: "90%",
          opacity: "0.8",
          margin: "25px auto",
        }} />

        {/*Posts*/}
        <div className="gallery">
        <img src="https://i.pinimg.com/originals/55/a0/ab/55a0ab1054f257b61efed032c9bbc85c.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/55/a0/ab/55a0ab1054f257b61efed032c9bbc85c.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/55/a0/ab/55a0ab1054f257b61efed032c9bbc85c.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/55/a0/ab/55a0ab1054f257b61efed032c9bbc85c.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/55/a0/ab/55a0ab1054f257b61efed032c9bbc85c.jpg" alt="" />
        <img src="https://i.pinimg.com/originals/55/a0/ab/55a0ab1054f257b61efed032c9bbc85c.jpg" alt="" />
        </div>
    </div>
  )
}

export default Profile
