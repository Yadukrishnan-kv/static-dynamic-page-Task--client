import React from 'react'
import './Footer.css'
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";


function Footer() {
  return (
    <div className="footer">
         <div className="footer-content">
        <div className="footer-logo">
          <h2>logistex</h2>
          <p>Lorem ipsum dolor sit amet, consect etur adi <br/>pisicing elit sed do eiusmod tempor incidunt ut <br/> labore et</p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter Your E-Mail" />
            <button className="subscribe-button">Subscribe</button>
          </div>
          <p className="no-spam">We Don’t Send You Any Spam</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li>Air Freight</li>
              <li>Smart Warehousing</li>
              <li>Train Freight</li>
              <li>Ocean Freight</li>
              <li>Road Freight</li>
              <li>Supply Chain</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>How It’s Work</li>
              <li>Partners</li>
              <li>Testimonials</li>
              <li>Case Studies</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li><FiMapPin style={{fontSize:"35px"}} /> 58 Street Commercial Road, Fratton, Australia</li>
              <li><FiPhone style={{fontSize:"20px"}} /> +123 888 9999</li>
              <li><FaClock  style={{fontSize:"30px"}}/>
              Mon – Sat: 8 am – 5 pm, Sunday: CLOSED</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-social">
        
        <div className="footer-bottom">
        <p>Copyright ©Safex | All Right Reserved</p>
      </div>
      <div className="footer-socials">
        <a href="#"><FaFacebookF style={{fontSize:"30px"}}/></a>
        <a href="#"><FaTwitter style={{fontSize:"30px"}}/></a>
        <a href="#"><FaWhatsapp style={{fontSize:"30px"}}/>
        </a>
        <a href="#"><FaInstagram style={{fontSize:"30px"}}/>
        </a>
        <a href="#"><FaYoutube style={{fontSize:"30px"}}/>
        </a>
        </div>
      </div>
      
    </div>
  )
}

export default Footer