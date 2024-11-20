import React, { useState } from 'react'
import './AdminHome.css'
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

import { FaHome, FaInfoCircle, FaImages, FaQuestionCircle, FaEnvelope } from "react-icons/fa";
import { setToken } from '../../../Localstorage';
function AdminHome() {
  const [userId, setuserId] = useState("");
    const [hovered, setHovered] = useState("");

    const handleMouseEnter = (option) => {
      setHovered(option);
    };
  
    const handleMouseLeave = () => {
      setHovered("");
    };
    const Navigate = useNavigate();
    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      Navigate("/login");
    };
  return (
    <div>
     <nav className="navbar">
      <div className="navbar-logo">
        
        <img src="http://127.0.0.1:5500/cargo/assets/img/logo/logo.svg" alt="" />
      </div>
      <div className="navbar-right">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
     <Link to={'/profile'} style={{textDecoration:"none"}}>  <FaUserAlt style={{color:"black",fontSize:"24px"}}/></Link> 

      </div>
    </nav>

    <div className="sidebar">
      {/* Logo Section */}
      <div className="logo">
       <span>Admin Dashboard</span>
      </div>
      <hr />

      {/* Menu Items */}
      <div
        className="menu-item"
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={handleMouseLeave}
      >
        <FaHome className="icon" />
        Home
        {hovered === "home" && (
          <div className="submenu">
           <Link to={'/Bannerview'} style={{textDecoration:"none"}}> <div className="submenu-item">Banners</div></Link>
           <Link to={'/Welcomenotes'} style={{textDecoration:"none"}}>  <div className="submenu-item">Welcome Note</div></Link>
           <Link to={'/Clients'} style={{textDecoration:"none"}}><div className="submenu-item">Clients</div></Link>
           <Link to={'/Services'} style={{textDecoration:"none"}}><div className="submenu-item">Services</div></Link>
           <Link to={'/reviews'} style={{textDecoration:"none"}}> <div className="submenu-item">Reviews</div></Link>
           <Link to={'/News'} style={{textDecoration:"none"}}><div className="submenu-item">News</div></Link>
          </div>
        )}
      </div>
      <hr />

      <div
        className="menu-item"
        onMouseEnter={() => handleMouseEnter("about")}
        onMouseLeave={handleMouseLeave}
      >
        <FaInfoCircle className="icon" />
        About
        {hovered === "about" && (
          <div className="submenu">
            <Link to={'/Company'} style={{textDecoration:"none"}}><div className="submenu-item">Company Info</div></Link> 
            <Link to={'/Team'} style={{textDecoration:"none"}}><div className="submenu-item">Team Members</div></Link> 
            <Link to={'/reviews'} style={{textDecoration:"none"}}> <div className="submenu-item">Reviews</div></Link>
            <Link to={'/Clients'} style={{textDecoration:"none"}}> <div className="submenu-item">Clients</div></Link>
           
          </div>
        )}
      </div>
      <hr />
      <div
        className="menu-item"
        onMouseEnter={() => handleMouseEnter("Services")}
        onMouseLeave={handleMouseLeave}
      >
        <FaHome className="icon" />
       Service
        {hovered === "Services" && (
          <div className="submenu">
        <Link to={'/Service'} style={{textDecoration:"none"}}><div className="submenu-item">Services</div></Link>   
            
          </div>
        )}
      </div>
      <hr/>
      <div
        className="menu-item"
        onMouseEnter={() => handleMouseEnter("gallery")}
        onMouseLeave={handleMouseLeave}
      >
        <FaImages className="icon" />
        Gallery
        {hovered === "gallery" && (
          <div className="submenu">
         <Link to={'/Gallery'} style={{textDecoration:"none"}}><div className="submenu-item">List Gallery</div></Link>
          
          </div>
        )}
      </div>
      <hr />

      <div
        className="menu-item"
        onMouseEnter={() => handleMouseEnter("faq")}
        onMouseLeave={handleMouseLeave}
      >
        <FaQuestionCircle className="icon" />
        FAQ
        {hovered === "faq" && (
          <div className="submenu">
           
           <Link to={'/Faq'} style={{textDecoration:"none"}}>  <div className="submenu-item">List Faq</div></Link>
          </div>
        )}
      </div>
      <hr />

      <div
        className="menu-item"
        onMouseEnter={() => handleMouseEnter("contact")}
        onMouseLeave={handleMouseLeave}
      >
        <FaEnvelope className="icon" />
        Contact Us
        {hovered === "contact" && (
          <div className="submenu">
             <Link to={'/ContactUs'} style={{textDecoration:"none"}}> <div className="submenu-item">Add Address</div></Link>
             <Link to={'/emailView'} style={{textDecoration:"none"}}> <div className="submenu-item">view Emails</div></Link>
          </div>
        )}
      </div>
      <hr />
    </div>
    </div>
  )
}

export default AdminHome