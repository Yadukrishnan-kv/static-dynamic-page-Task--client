import React, { useEffect, useState } from 'react'
import './About.css'
import '../../../Components/Logos/Logos.css'
import img1 from './../../../Components/Logos/quote.svg'
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegClock,FaSearch } from "react-icons/fa6";
import { faFacebookF, faTwitter, faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import {  FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';


import { Carousel } from 'react-bootstrap';

import { Link } from 'react-router-dom'
import axios from 'axios';
function About() {
  const token = localStorage.getItem('token');
  const [Client, setClient] = useState([]
  );
  const [Slider, setSlider] = useState([]
  );
  const [Team, setTeam] = useState([]);
  useEffect(() => {
axios.get("http://localhost:4000/viewclient", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
      setClient(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [token]);
 
  useEffect(() => {
    axios.get("http://localhost:4000/viewTeam", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
      setTeam(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [token]);
  useEffect(() => {
    axios.get("http://localhost:4000/viewSlider", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
      setSlider(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [token]);
  
  
  const [Company, setCompany] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:4000/viewCompany", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
      setCompany(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [token]);
  return (
    <div>
    


   {/* //header section */}


  <div className="AboutHeader" style={{ backgroundImage: "url('http://127.0.0.1:5500/assets/img/bg/breadcrumb_bg.jpg')" ,height:"300px" }}>
  <div className="AboutHeaderPara">
    <h1>About Us</h1>
    <div style={{display:"flex"}}><p>Home</p><FaLongArrowAltRight  style={{fontSize:"30px",marginLeft:"20px",marginTop:"2px"}}/><p style={{marginLeft:"10px",color:"#d70006"}}>About Us</p> </div>
    </div>
  </div>
  <>

{/* //team member */}




  {/* // Banner */}

  <div className="maindiv1">
      <div className="leftsection1">
      <div className="abouts__img">
              <img src="http://127.0.0.1:5500/assets/img/images/inner_about_img01.jpg" alt="img" className="abouts__img1" />
              <img src="http://127.0.0.1:5500/assets/img/images/inner_about_img02.jpg" alt="img" className="abouts__img2" />
             
            </div>
      </div>
      <div className="rightsection1">
        <div className="content1">
          <div className="content11">
          <span>{Company[0]?.title}</span>
          <div dangerouslySetInnerHTML={{ __html: Company[0]?.content }} />
            
        
          </div>
             <div dangerouslySetInnerHTML={{ __html: Company[0]?.description}} />
        </div>
        <div className="content21">
          <div className="content2left1">
            <div className="content2p1">
            <CiCircleCheck style={{color:"#29ABE2",fontSize:"20px",marginTop:"5px"}}/><span>Quality Control System</span>
            </div>
            <div className="content2p1">
            <CiCircleCheck style={{color:"#29ABE2",fontSize:"20px",marginTop:"5px"}}/>
           <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="content2p1">
            <CiCircleCheck style={{color:"#29ABE2",fontSize:"20px",marginTop:"5px"}}/>
            <span>Professional and Qualified</span>
            </div>
            <div className="content2p1">
            <CiCircleCheck style={{color:"#29ABE2",fontSize:"20px",marginTop:"5px"}}/>
            <span>Safe, Reliable And Express</span>
            </div>
           
          </div>
          <div className="content2right1">
          <div className="about__review-wrap1">
                  <div className="about__review-box1">
                   <div>
                    <div className="experience__box1">
                    <span style={{lineHeight:"25px"}}>Flexible, Improved & <br/>Accelerated Solutions!</span>
                    <span style={{fontSize:"28px",marginLeft:"90px"}}>15.9M</span>
                    <span style={{marginLeft:"40px"}}>Clients WorldWide</span>
                   </div>
                  </div>
                  
                </div>
              </div>
              </div>
          </div>
      <p style={{fontSize:"18px",lineHeight:"25px",fontWeight:"400",color:"#4C4C5B",paddingLeft:'60px'}}>Modeniscing elit. Aliquam vulputate, tortor nec com ultri viverra Suspen <br/> disse faucibus sed dolor eget Sed id urna. hiftler Group irepresentatilve <br/>loisticsti operator providings.Modeniscing elit. Aliquam vulputate, tortor nec <br/> com ultri viverra Suspen disse faucibus sed dolor eget.</p>
      </div>
     </div>
    </>


    <div className="team-section">
      <div className="team-header">
        <p>OUR TEAM MEMBER</p>
        <h2>Meet Our Executive People</h2>
      </div>
      <div className="team-cards">
        <div className="team-card">
          <img src={Team[0]?.memberimg} alt="Kristin Watson" className="team-image" />
          <h3>{Team[0]?.membername}</h3>
          <p>{Team[0]?.position}</p>
          <div className="social-icons1">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>

        <div className="team-card">
          <img src={Team[1]?.memberimg} alt="Guy Hawkins" className="team-image" />
          <h3>{Team[1]?.membername}</h3>
          <p>{Team[1]?.position}</p>
          <div className="social-icons1">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>

        <div className="team-card">
          <img src={Team[2]?.memberimg} alt="Wade Warren" className="team-image" />
          <h3>{Team[2]?.membername}</h3>
          <p>{Team[2]?.position}</p>
          <div className="social-icons1">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>

        <div className="team-card">
          <img src={Team[3]?.memberimg} alt="Jenny Wilson" className="team-image" />
          <h3>{Team[3]?.membername}</h3>
          <p>{Team[3]?.position}</p>
          <div className="social-icons1">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>
      </div>
    </div>







 {/* //slider */}



 <div className="textModuls" style={{ backgroundImage: "url('http://127.0.0.1:5500/cargo/assets/img/images/testimonial_shape.png')" ,height:"500px",marginTop:"220px"}}>
        <div className="textModuleQuote">
        <img src={img1} alt="" />
        </div>
         <div className="textModuleImg">
         <img src={Slider[0]?.sliderimg1} alt="" /><img src={Slider[1]?.sliderimg1} alt="" />
         <img src={Slider[2]?.sliderimg1} alt="" /><img src={Slider[3]?.sliderimg1} alt="" />
        </div>
 <div className="TextModuleslider">
        <Carousel fade={true} interval={3000} indicators={false} controls={true}>
      <Carousel.Item>
        <div className="text-slide">
        <h2>{Slider[0]?.slidername}</h2>
          <h3>{Slider[0]?.slidertitle}</h3>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png" 
            alt="Golden Rating"
            className="rating-image"
          />
          <p>{Slider[0]?.slidercontent}
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="text-slide">
        <h2>{Slider[1]?.slidername}</h2>
        <h3>{Slider[1]?.slidertitle}</h3>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png" 
            alt="Golden Rating"
            className="rating-image"
          />
          <p>{Slider[1]?.slidercontent}</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="text-slide">
        <h2>{Slider[2]?.slidername}</h2>
        <h3>{Slider[2]?.slidertitle}</h3>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png" 
            alt="Golden Rating"
            className="rating-image"
          />
          <p>{Slider[2]?.slidercontent}</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="text-slide">
        <h2>{Slider[3]?.slidername}</h2>
        <h3>{Slider[3]?.slidertitle}</h3>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png" 
            alt="Golden Rating"
            className="rating-image"
          />
          <p>{Slider[3]?.slidercontent}</p>
        </div>
      </Carousel.Item>
    </Carousel>
        </div>
        </div>


   {/* //logo  */}
 
   <div class="swiper-wrapper1">
                <div class="swiper-slide">
                    <div class="brand__item">
                    <img src={Client[0]?.logo1} alt="img"/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="brand__item">
                    <img src={Client[0]?.logo2} alt="img"/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="brand__item">
                    <img src={Client[0]?.logo3} alt="img"/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="brand__item">
                    <img src={Client[0]?.logo4} alt="img"/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="brand__item">
                    <img src={Client[0]?.logo5} alt="img"/>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="brand__item">
                    <img src={Client[0]?.logo6} alt="img"/>
                    </div>
                </div>
            </div>



            
            <footer className="footer">
            <div className="footer-container">
                {/* Logo and Description */}
                <div className="footer-section logo-section">
                    <h2 className="footer-logo">Logistex</h2>
                    <p>Lorem Ipsum Dolor Sit Amet, Consect Etur Adi Pisicing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et</p>
                    <div className="social-icons">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaWhatsapp />
                        <FaYoutube />
                    </div>
                </div>

                {/* Our Services */}
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

                {/* Quick Links */}
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

                {/* Contact Information */}
                <div className="footer-section contact-section">
                    <h3>Information</h3>
                    <p><MdLocationOn /> 58 Street Commercial Road, Fratton, Australia</p>
                    <p><FiPhone /> +123 888 9999</p>
                    <p><AiOutlineClockCircle /> Mon – Sat: 8 am – 5 pm, Sunday: CLOSED</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © Logistex | All Rights Reserved</p>
            </div>
        </footer>

   </div>
                   
  
  
  )
}

export default About