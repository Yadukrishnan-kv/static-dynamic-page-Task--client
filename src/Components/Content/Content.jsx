import React, { useEffect, useState } from 'react'
import './Content.css'
import { CiCircleCheck } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import axios from 'axios';


function Content() {
  const [welcomeNote, setwelcomeNote] = useState([]);
   
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get("http://localhost:4000/viewwelcomeNote", {
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
    <div>
     <div className="maindiv">
      <div className="leftsection">
      <div className="about__img">
              <img src="http://127.0.0.1:5500/assets/img/images/about_img01.png" alt="img" className="about__img1" />
              <img src="http://127.0.0.1:5500/assets/img/images/about_img03.png" alt="img" className="about__img2" />
              <img src="http://127.0.0.1:5500/assets/img/images/about_img02.png" alt="img" className="about__img3"  />
            </div>
      </div>
      <div className="rightsection">
        <div className="content">
          <div className="content1">
          <span>{welcomeNote[0]?.title}</span>
          <h1>{welcomeNote[0]?.content}</h1>
          </div>
          <p style={{paddingLeft:"50px"}}>{welcomeNote[0]?.description}</p>
        </div>
        <div className="content2">
          <div className="content2left">
            <div className="content2p">
            <CiCircleCheck style={{color:"#29ABE2",fontSize:"20px",marginTop:"5px"}}/><span>{welcomeNote[0]?.point1}</span>
            </div>
            <div className="content2p">
            <CiCircleCheck style={{color:"#29ABE2",fontSize:"20px",marginTop:"5px"}}/>
           <span>{welcomeNote[0]?.point2}</span>
            </div>
            <div className="content2p">
            <CiCircleCheck style={{color:"#29ABE2",fontSize:"20px",marginTop:"5px"}}/>
            <span>{welcomeNote[0]?.point3}</span>
            </div>
            <div className="content2p">
            <CiCircleCheck style={{color:"#29ABE2",fontSize:"20px",marginTop:"5px"}}/>
            <span>{welcomeNote[0]?.point4}</span>
            </div>
            <button className="content2-button">Get in touch</button>
          </div>
          <div className="content2right">
          <div className="about__review-wrap">
                  <div className="about__review-box">
                    <div>
                    <hr className="hr" />
                    </div>
                    <div>
                    <div className="about__review-author">
                      <img src="http://127.0.0.1:5500/assets/img/images/author01.png" alt="img" className="about__review-author1" />
                      <img src="http://127.0.0.1:5500/assets/img/images/author02.png" alt="img" className="about__review-author1"/>
                      <img src="http://127.0.0.1:5500/assets/img/images/author03.png" alt="img" className="about__review-author1" />
                      <img src="http://127.0.0.1:5500/assets/img/images/author04.png" alt="img"  className="about__review-author1"/>
                    </div>
                    <div className="review">
                      <i className="fas fa-star"><CiStar />
                      </i>
                      <i className="fas fa-star"><CiStar />
                      </i>
                      <i className="fas fa-star"><CiStar />
                      </i>
                      <i className="fas fa-star"><CiStar />
                      </i>
                      <i className="fas fa-star"><CiStar />
                      </i>
                    </div>
                    <span>Clients 4.7 (1,567 Reviews)</span>
                    <div className="experience__box">
                    <h4 className="title">25</h4>
                    <hr className="separator-horizontal" />
                    <span>Years Of <br/>Experience</span>
                  </div>
                  </div>
                  
                </div>
              </div>

             

          </div>
          
        </div>
       
      </div>
      
     </div>
    
    </div>
                   


  )
}

export default Content