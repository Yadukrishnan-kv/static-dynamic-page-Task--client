import React, { useState } from 'react'
import './Nav.css'
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegClock,FaSearch } from "react-icons/fa6";
import { faFacebookF, faTwitter, faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

import { BsTelephone } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { Link } from 'react-router-dom';


function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
    {/* // nav section     */}
<div className="navbarNav">
<div className="navbar-top1Nav">
  <div className="navicons1Nav">
    <IoLocationOutline style={{ color: "#29ABE2", fontSize: "20px" }} />
    <span>775 Rolling Green Rd</span>
  </div>
  <hr className="separatorNav" />
  <div className="navicons1Nav">
    <AiOutlineMail style={{ color: "#29ABE2", fontSize: "20px" }} />
    <span>info@safexuae.com</span>
  </div>
  <hr className="separatorNav" />
  <div className="navicons1Nav">
    <FaRegClock style={{ color: "#29ABE2", fontSize: "20px" }} />
    <span>Mon – Sun: 9.00 am – 8.00 pm</span>
  </div>
  <div className="nav-seaction1Nav">
    <div className="nav-seaction11Nav">
      <span>Help Center</span>
      <hr className="separatorNav" />
      <span>Find Store</span>
      <hr className="separatorNav" />
      <span>Follow Us On:</span>
    </div>
    <div className='nav-seaction21Nav'>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faWhatsapp} /></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "15px" }}><FontAwesomeIcon icon={faYoutube} /></a>
    </div>
  </div>
</div>

<div className="navbar-main1Nav">
  <div className="logo1Nav">
  <MdMenu style={{ color: "grey",fontSize:"32px", marginTop: "30px",}} onClick={toggleMenu} />
  <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo-container" style={{display:"flex",fontSize:"16px"}}>
          <img src="http://127.0.0.1:5500/assets/img/logo/logo.svg" alt="Logo" className="logo" />
          <p onClick={toggleMenu} style={{fontSize:"22px",paddingLeft:"100px"}}>x</p>
         
         
        </div>
        <hr className="divider" />
        <div className="address">
          <h4>Office Address</h4>
          <p>123/A, Miranda City Likaoli</p>
          <p>Prikano, UAE</p><br/>
          <h4>Phone Numbers</h4>
          <p>+971 123 4567 9</p>
          <p>+(971) 123 4567 8</p><br/>
          <h4>Email Address</h4>
          <p>info@safexuae.com</p>
          <p>sales@safexuae.com</p>
        </div>

        <div className="social-media">
         
          <div className="social-icons">
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
  <hr className="separator-horizontal11Nav" />
<img src="http://127.0.0.1:5500/assets/img/logo/logo.svg" alt="logo" style={{color:"#d70006"}}/>
  </div>
  <nav className='navAboutNav'>
  <Link to={'/Home'} style={{textDecoration:"none"}}> <p>Home</p></Link>
  <Link to={'/About'} style={{textDecoration:"none"}}><p>About Us</p></Link>
  <Link to={'/ServicesPage'} style={{textDecoration:"none"}}>  <p>Services</p></Link>
  <Link to={'/GalleryPage'} style={{textDecoration:"none"}}>  <p>Gallery</p></Link>
  <Link to={'/FaqPage'} style={{textDecoration:"none"}}>   <p>FAQ</p></Link>
  <Link to={'/ContactUsPage'} style={{textDecoration:"none"}}><p>Contact Us</p></Link>
  </nav>
  <div className="navbar-right1Nav">
        <FiSearch style={{ color: "grey", fontSize: "25px",marginLeft:"60px"  }} />
        <hr className="separatorNav1" />
        <BsTelephone style={{ color: "grey", fontSize: "25px",marginLeft:"10px"  }} />
          <div style={{display:'flex',flexDirection:"column",marginLeft:"10px"}}>
          <span className="contactNav">Emergency Call:</span>
          <span style={{fontWeight:"bold"}}>(205) 555-0100</span>
          </div>
          
          <button className="track-order1Nav"><HiArrowTrendingUp style={{marginRight: "5px",fontSize:"20px"}}/>TRACK ORDER</button>
</div>
</div>
</div>
</div>
)
 
}

export default Nav