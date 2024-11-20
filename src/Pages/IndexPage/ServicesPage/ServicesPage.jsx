import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import './ServicesPage.css'



import axios from 'axios';

function ServicesPage() {


    const [Service, setService] = useState([]);
    const token = localStorage.getItem('token');
  
  
    useEffect(() => {
      axios.get("http://localhost:4000/viewService", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res);
        setService(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }, [token]);
  return (
    <div>

      {/* //header section */}

      <div className="AboutHeader" style={{ backgroundImage: "url('http://127.0.0.1:5500/assets/img/bg/breadcrumb_bg.jpg')" ,height:"300px",}}>
     <div className="AboutHeaderPara">
      <h1>Our Services</h1>
    <div style={{display:"flex"}}><p>Home</p><FaLongArrowAltRight  style={{fontSize:"30px",marginLeft:"20px",marginTop:"2px"}}/><p style={{marginLeft:"10px",color:"#d70006"}}>Services</p> </div>
    </div>
    </div>

     

     {/* //cotent section // */}

     <div className="services-container">
      <div className="card">
        <div className="image-container">
          <img src={Service[0]?.serviceimg1} alt="Ocean Freight" className="main-image" />
          
          {/* <BsTruckFrontFill alt="Ocean Freight" className="overlay-icon1" /> */}

          {/* <img src={Service[0]?.serviceimg2} alt="Ocean Freight" className="overlay-icon1" /> */}

          <div className="overlay1">
            <span>Read More</span>
          </div>
        </div>
        <div className="card-content">
          <h3>{Service[0]?.servicetitle}</h3>
          <p>
          {Service[0]?.servicecontent}
          </p>
        </div>
      </div>

      <div className="card">
        <div className="image-container">
          <img src={Service[2]?.serviceimg1} alt="Road Freight" className="main-image" />
          {/* <img
            src={Service[2]?.serviceimg2}
            alt="Road Icon"
            className="overlay-icon1"
          /> */}
          <div className="overlay1">
            <span>Read More</span>
          </div>
        </div>
        <div className="card-content">
        <h3>{Service[2]?.servicetitle}</h3>
          <p>
          {Service[2]?.servicecontent}
          </p>
        </div>
      </div>

     
      <div className="card">
        <div className="image-container">
          <img src={Service[1]?.serviceimg1} alt="Road Freight" className="main-image" />
          {/* <img
            src={Service[1]?.serviceimg2}
            alt="Road Icon"
            className="overlay-icon"
          /> */}
          <div className="overlay1">
            <span>Read More</span>
          </div>
        </div>
        <div className="card-content">
        <h3>{Service[1]?.servicetitle}</h3>
          <p>
          {Service[1]?.servicecontent}
          </p>
        </div>
      </div>
      
      
      <div className="card">
        <div className="image-container">
          <img src={Service[3]?.serviceimg1} alt="Road Freight" className="main-image" />
          {/* <img
            src={Service[3]?.serviceimg2}
            alt="Road Icon"
            className="overlay-icon"
          /> */}
          <div className="overlay1">
            <span>Read More</span>
          </div>
        </div>
        <div className="card-content">
        <h3>{Service[3]?.servicetitle}</h3>
          <p>
          {Service[3]?.servicecontent}
          </p>
        </div>
      </div>
      
      
      <div className="card">
        <div className="image-container">
          <img src={Service[4]?.serviceimg1} alt="Road Freight" className="main-image" />
          {/* <img
            src={Service[4]?.serviceimg2}
            alt="Road Icon"
            className="overlay-icon"
          /> */}
          <div className="overlay1">
            <span>Read More</span>
          </div>
        </div>
        <div className="card-content">
        <h3>{Service[4]?.servicetitle}</h3>
          <p>
          {Service[4]?.servicecontent}
          </p>
        </div>
      </div>
      
      <div className="card">
        <div className="image-container">
          <img src={Service[5]?.serviceimg1} alt="Road Freight" className="main-image" />
          {/* <img
            src={Service[5]?.serviceimg2}
            alt="Road Icon"
            className="overlay-icon1"
          /> */}
          <div className="overlay1">
            <span>Read More</span>
          </div>
        </div>
        <div className="card-content">
        <h3>{Service[5]?.servicetitle}</h3>
          <p>
          {Service[5]?.servicecontent}
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ServicesPage