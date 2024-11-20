import React, { useEffect, useState } from 'react'
import './FaqPage.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Faqpage() {

  const { id } = useParams();
const [Faq, setFaq] = useState([]);
const token = localStorage.getItem('token');


useEffect(() => {
  axios.get("http://localhost:4000/viewFaq", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    console.log(res);
    setFaq(res.data);
  }).catch((err) => {
    console.log(err);
  });
}, [token]);

  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [isAnswerVisible1, setIsAnswerVisible1] = useState(false);
  const [isAnswerVisible2, setIsAnswerVisible2] = useState(false);
  const [isAnswerVisible3, setIsAnswerVisible3] = useState(false);
  const [isAnswerVisible4, setIsAnswerVisible4] = useState(false);
  const [isAnswerVisible5, setIsAnswerVisible5] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  const toggleAnswer1 = () => {
    setIsAnswerVisible1(!isAnswerVisible1);
  };
  const toggleAnswer2 = () => {
    setIsAnswerVisible2(!isAnswerVisible2);
  };
  const toggleAnswer3 = () => {
    setIsAnswerVisible3(!isAnswerVisible3);
  };
  const toggleAnswer4 = () => {
    setIsAnswerVisible4(!isAnswerVisible4);
  };
  const toggleAnswer5 = () => {
    setIsAnswerVisible5(!isAnswerVisible5);
  };
  return (
    <div>
       <div className="AboutHeader" style={{ backgroundImage: "url('http://127.0.0.1:5500/assets/img/bg/breadcrumb_bg.jpg')" ,height:"300px",}}>
     <div className="AboutHeaderPara">
      <h1>Faq’s</h1>
    <div style={{display:"flex"}}><p>Home</p><FaLongArrowAltRight  style={{fontSize:"30px",marginLeft:"20px",marginTop:"2px"}}/><p style={{marginLeft:"10px",color:"#d70006"}}>FAQ'S</p> </div>
    </div>
    </div>

    <div className="faq-container">
      <h1 className="faq-heading">Discover Frequently Asked Questions <br/>from Our Support</h1>
      
      <div className="question-grid">
        <div className="question-container">
          <div className="question-flex">
            <p className="question">{Faq[0]?.Faqtitle}</p>
            <button className="plus-button" onClick={toggleAnswer}>
              {isAnswerVisible ? '-' : '+'}
            </button>
          </div>
          
          {isAnswerVisible && (
            <div className="answer">
              <p>
              {Faq[0]?.Faqanswer}
              </p>
            </div>
          )}
        </div>
        <div className="question-container">
          <div className="question-flex">
            <p className="question">{Faq[1]?.Faqtitle}</p>
            <button className="plus-button" onClick={toggleAnswer1}>
              {isAnswerVisible1 ? '-' : '+'}
            </button>
          </div>
          
          {isAnswerVisible1 && (
            <div className="answer">
              <p>
              {Faq[1]?.Faqanswer}
              </p>
            </div>
          )}
        </div>
        <div className="question-container">
          <div className="question-flex">
            <p className="question">{Faq[2]?.Faqtitle}</p>
            <button className="plus-button" onClick={toggleAnswer2}>
              {isAnswerVisible2 ? '-' : '+'}
            </button>
          </div>
          
          {isAnswerVisible2 && (
            <div className="answer">
               <p>
              {Faq[2]?.Faqanswer}
              </p>
            </div>
          )}
        </div>
        <div className="question-container">
          <div className="question-flex">
            <p className="question">{Faq[3]?.Faqtitle}</p>
            <button className="plus-button" onClick={toggleAnswer3}>
              {isAnswerVisible3 ? '-' : '+'}
            </button>
          </div>
          
          {isAnswerVisible3 && (
            <div className="answer">
               <p>
              {Faq[3]?.Faqanswer}
              </p>
            </div>
          )}
        </div>
        <div className="question-container">
          <div className="question-flex">
            <p className="question">{Faq[4]?.Faqtitle}</p>
            <button className="plus-button" onClick={toggleAnswer4}>
              {isAnswerVisible4 ? '-' : '+'}
            </button>
          </div>
          
          {isAnswerVisible4 && (
            <div className="answer">
               <p>
              {Faq[4]?.Faqanswer}
              </p>
            </div>
          )}
        </div>
        <div className="question-container">
          <div className="question-flex">
            <p className="question">{Faq[5]?.Faqtitle}</p>
            <button className="plus-button" onClick={toggleAnswer5}>
              {isAnswerVisible5 ? '-' : '+'}
            </button>
          </div>
          
          {isAnswerVisible5 && (
            <div className="answer">
              <p>
              {Faq[5]?.Faqanswer}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Faqpage