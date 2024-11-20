import React from 'react';
import './Navbar.css';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegClock,FaSearch } from "react-icons/fa6";
import { faFacebookF, faTwitter, faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navicons">
          <IoLocationOutline style={{ color: "#29ABE2", fontSize: "20px" }} />
          <span>775 Rolling Green Rd</span>
        </div>
        <hr className="separator" />
        <div className="navicons">
          <AiOutlineMail style={{ color: "#29ABE2", fontSize: "20px" }} />
          <span>info@safexuae.com</span>
        </div>
        <hr className="separator" />
        <div className="navicons">
          <FaRegClock style={{ color: "#29ABE2", fontSize: "20px" }} />
          <span>Mon – Sun: 9.00 am – 8.00 pm</span>
        </div>
        <div className="nav-seaction">
          <div className="nav-seaction1">
            <span>Help Center</span>
            <hr className="separator" />
            <span>Find Store</span>
            <hr className="separator" />
            <span>Follow Us On:</span>
          </div>
          <div className='nav-seaction2'>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
      <div className="navbar-main">
        <div className="logo">
          <MdMenu style={{ color: "grey", height: "50px", width: "50px", marginTop: "15px",marginLeft:"15px"}} />
          <hr className="separator-horizontal" />
          <img src="http://127.0.0.1:5500/assets/img/logo/logo.svg" alt="logo" />
        </div>
        <nav className='nav'>
        <Link to={'/Home'} style={{textDecoration:"none"}}> <p>Home</p></Link>
        <Link to={'/About'} style={{textDecoration:"none"}}><p>About Us</p></Link>
        <Link to={'/ServicesPage'} style={{textDecoration:"none"}}>  <p>Services</p></Link>
        <Link to={'/GalleryPage'} style={{textDecoration:"none"}}> <p>Gallery</p></Link>
        <Link to={'/FaqPage'} style={{textDecoration:"none"}}>   <p>FAQ</p></Link>
        <Link to={'/ContactUsPage'} style={{textDecoration:"none"}}>  <p>Contact Us</p></Link>
        </nav>
        <div className="navbar-right">
        <FiSearch style={{ color: "grey", fontSize: "30" }} />
        <hr className="separator" />
        <BsTelephone style={{ color: "grey", fontSize: "30px",marginLeft:"5px"  }} />
          <div style={{display:'flex',flexDirection:"column",marginLeft:"10px"}}>
          <span className="contact">Emergency Call:</span>
          <span>(205) 555-0100</span>
          </div>
          
          <button className="track-order"><HiArrowTrendingUp style={{marginRight: "5px",fontSize:"20px"}}/>TRACK ORDER</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
