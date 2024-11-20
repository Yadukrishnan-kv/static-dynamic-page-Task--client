import React, { useEffect, useState } from 'react'
import './Logos.css'
import img from './quote.svg'
import { Carousel } from 'react-bootstrap';
import { MdOutlineStar } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import axios from 'axios';

function Logos() {
  const [Services, setServices] = useState([]
  );
 
  const [Client, setClient] = useState([]
   );
   const [Slider, setSlider] = useState([]
   );
   const [News, setNews] = useState([]);
  const token = localStorage.getItem('token');

  
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
   axios.get("http://localhost:4000/viewServices", {
     headers: {
       'Authorization': `Bearer ${token}`
     }
   }).then((res) => {
     console.log(res);
     setServices(res.data);
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

   
  
  
    useEffect(() => {
      axios.get("http://localhost:4000/viewNews", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res);
        setNews(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }, [token]);
  return (
    <div>
        <div className="logos">
        <div class="swiper-wrapper">
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
        </div>
        <div className="services">
            <div className="ServiceTop">
                <div className="ServiceTopLeft">
                <span>{Services[0]?.title}</span>
                 <h1>{Services[0]?.content}</h1>
                </div>
                <div className="ServiceTopRight">
                <button className="ServiceTopRight-button">All Services</button>
                </div>
            </div>
            <div className="ServiceDown">
                <div className="ServiceDownMain">
                    <div className="ServiceDownMain1">
                        <img src={Services[0]?.servicesimg1} alt="" />
                        <h3>{Services[0]?.servicesimg1title}</h3>
                        <p>{Services[0]?.servicesimg1content}</p>
                    </div>
                    <div className="ServiceDownMain2">
                    <img src={Services[1]?.servicesimg1} alt="" />
                        <h3>{Services[1]?.servicesimg1title}</h3>
                        <p>{Services[1]?.servicesimg1content}</p>
                    </div>
                    <div className="ServiceDownMain2">
                    <img src={Services[2]?.servicesimg1} alt="" />
                        <h3>{Services[2]?.servicesimg1title}</h3>
                        <p>{Services[2]?.servicesimg1content}</p>
                    </div>
                    <div className="ServiceDownMain2">
                    <img src={Services[3]?.servicesimg1} alt="" />
                        <h3>{Services[3]?.servicesimg1title}</h3>
                        <p>{Services[3]?.servicesimg1content}</p>
                    </div>
                </div>
            </div>
            <div className="services__shape-wrap">
           
        <img src="http://127.0.0.1:5500/cargo/assets/img/services/services_shape01.png" alt="shape" className="rotateme" />
        <img src="http://127.0.0.1:5500/cargo/assets/img/services/services_shape02.png" alt="shape" />
      </div>
       



        </div>
        <div className="textModuls" style={{ backgroundImage: "url('http://127.0.0.1:5500/cargo/assets/img/images/testimonial_shape.png')" ,height:"500px",marginTop:"220px"}}>
        <div className="textModuleQuote">
        <img src={img} alt="" />
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




        <div className="LatestNewsTop">
                <div className="LatestNewsTopLeft">
                  
                <span>{News[0]?.title}</span>
                 <h1>{News[0]?.content}<br/>
                 </h1>
                </div>
                <div className="LatestNewsTopRight">
                <button className="LatestNewsTopRight-button">All Services</button>
                </div>
            </div>
            <div className="LatestNewsDown">
                <div className="LatestNewsDownMain">
                    <div className="LatestNewsDownMain1">
                        <img src={News[0]?.newsimg1} alt="" />
                        <div className="LatestNewsDownMaincalender">
                        <SlCalender style={{fontSize:"20px",marginLeft:"20px",marginTop:"20px"}} /> <span style={{fontSize:"16px",marginLeft:"10px",marginTop:"20px"}} >
                          {News[0]?.newsdate}</span> 
                        </div>
                       
                        <h3>{News[0]?.Newsimg1title}</h3>
                        <p>{News[0]?.Newsimg1content}</p>
                        <button className="LatestNewsDownMain-button">Read More</button>
                    </div>
                    <div className="LatestNewsDownMain2">
                    <img src={News[1]?.newsimg1} alt="" />
                    <div className="LatestNewsDownMaincalender">
                        <SlCalender style={{fontSize:"20px",marginLeft:"20px",marginTop:"20px"}} /> <span style={{fontSize:"16px",marginLeft:"10px",marginTop:"20px"}} >
                        {News[1]?.newsdate}</span> 
                        </div>
                        <h3>{News[1]?.Newsimg1title}</h3>
                        <p>{News[1]?.Newsimg1content}</p>
                        <button className="LatestNewsDownMain-button">Read More</button>
                    </div>
                    <div className="LatestNewsDownMain2">
                    <img src={News[2]?.newsimg1} alt="" />
                    <div className="LatestNewsDownMaincalender">
                        <SlCalender style={{fontSize:"20px",marginLeft:"20px",marginTop:"20px"}} /> <span style={{fontSize:"16px",marginLeft:"10px",marginTop:"20px"}} >
                        {News[2]?.newsdate}</span> 
                        </div>
                        <h3>{News[2]?.Newsimg1title}</h3>
                        <p>{News[2]?.Newsimg1content}</p>
                        <button className="LatestNewsDownMain-button">Read More</button>
                    </div>
                   
                </div>
            </div>
    </div>
  )
}

export default Logos