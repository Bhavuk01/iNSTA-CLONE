import React, { useEffect,useState } from 'react'
import "./Home.css"
const Home = () => {
  const [data,setData] = useState([])

  useEffect(() =>{
    fetch('http://localhost:5000/allposts',{
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
    }).then(res=>res.json())
    .then(result => setData(result))
    .catch(err => console.log(err));
  })

  const likePost = (id) => {
    fetch("http://localhost:5000/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((posts) => {
          if (posts._id == result._id) {
            return result;
          } else {
            return posts;
          }
        });
        setData(newData);
        console.log(result);
      });
  };
  const unlikePost = (id) => {
    fetch("http://localhost:5000/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((posts) => {
          if (posts._id == result._id) {
            return result;
          } else {
            return posts;
          }
        });
        setData(newData);
        console.log(result);
      });
  };
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
        <a href="/createpost"><img src="https://static.thenounproject.com/png/4374665-200.png" alt="Createpost" /></a>
      </div>
    </nav>
    
    <div className="home">
      
    </div>

           
            {data.map((posts)=>{
              return(
                 <div className="card">
            <div className="card-header">
                <div className="card-pic">
                    <img src="https://rukminim2.flixcart.com/image/850/1000/l4iscy80/poster/t/1/5/small-sidhu-moose-wala-punjabi-singer-poster-multicolor-photo-original-imagfedrzf7hwuku.jpeg?q=90" alt="" />
                </div>
                <div className="user-info">
                <h2>{posts.postedBy && posts.postedBy.name}</h2>
                </div>
            </div>
            {/*card image*/}
            <div className="card-image">
                 <img src={posts.photo} alt="" />
            </div>
            {/*card content*/}
            <div className="card-content">
            <span className="material-symbols-outlined" onClick={() => {
                    unlikePost(posts._id);
                  }}>favorite</span>
            <span className="material-symbols-outlined material-symbols-outlined-red" onClick={() => {
                    likePost(posts._id);
                  }}>favorite</span>
            <p>1 Like</p>
            <p>{posts.body}</p>
             </div>
             {/*add comment*/}
             <div className="add-comment">
             <span className="material-symbols-outlined">mood</span> 
             <input type="text" placeholder='add a comments' />
             <button className='comment'>Post</button>
             </div>
        </div>
              )      
            })} 
           
        
    </div>

  )
}

export default Home
