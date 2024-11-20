import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios';
function Banner() {


  const [view, setView] = useState([]);
  const [welcomeNote, setwelcomeNote] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get("http://localhost:4000/view", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
      setView(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [token]);

  useEffect(() => {
    axios.get("http://localhost:4000/welcomeNote", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
      setwelcomeNote(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [token]);

  return (

    //  banner section //

    <section className="banner" style={{ backgroundImage: "url('http://127.0.0.1:5500/assets/img/banner/banner_bg.jpg')" ,height:"600px"}}>
    <div className="banner-content">
    {/* <img src="http://127.0.0.1:5500/cargo/assets/img/banner/banner_shape.png" alt="Shape" className="rotateme" /> */}
      <h3>{view[0]?.title}</h3>
      <h1>{view[0]?.content}</h1>
      <p>{view[0]?.description}</p>
      <button className="explore-button">Explore Our Services</button>
    </div>
    <div >
            <div className="banner__img">
              <img src={view[0]?.image} alt="Banner"  />
            </div>
          </div>
       
      <div className="banner__shape-wrap">
       
        <img src={view[0]?.images}  alt="Additional banner image"  />
      </div>

  </section>
  //  end banner section //

  
  )
}

export default Banner