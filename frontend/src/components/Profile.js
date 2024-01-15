import React , {useEffect,useState}from 'react'
import './Profile.css'
const Profile = () => {
  const [pic, setPic] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/myposts'
      : 'https://localhost:5000/myposts';
  
    fetch(apiUrl, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        setPic(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  
  return (
    <div className="profile">
        {/* Profile frame */}
        <div className="profile-frame">
            <div className="profile-pic">
               <img src="https://i.pinimg.com/originals/55/a0/ab/55a0ab1054f257b61efed032c9bbc85c.jpg" alt="" /> 
            </div>  
            <div className="profile-data">
                <h1>{JSON.parse(localStorage.getItem("user")).name}</h1>
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
  {pic.map((pics) => {
    return <img key={"_pics.id"}src={pics.photo} className="item" alt="" />;
  })}
</div>
        </div>
  )
}

export default Profile
