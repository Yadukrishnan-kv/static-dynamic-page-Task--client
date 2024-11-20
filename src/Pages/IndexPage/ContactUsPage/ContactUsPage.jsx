import React, { useEffect, useState } from 'react'
import './ContactUspage.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ContactUsPage() {
  const navigate = useNavigate();

  const { id } = useParams();
    const [Contact, setContact] = useState([]);
    const token = localStorage.getItem('token');
    const [Email, setEmail] = useState({
      name:"",
      phone:"",
      email:"",
      sub:"",
      msg:""
});
  

  const update = (e) => {
      setEmail({ ...Email, [e.target.name]: e.target.value });
  };
    
    useEffect(() => {
      axios.get("http://localhost:4000/viewContact", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res);
        setContact(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }, [token]);


     const handleUpdate = () => {
        axios.post("http://localhost:4000/createEmail", Email, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res);
            
            navigate("/Home");
        }).catch((err) => {
            console.log(err);
           
        });
    };
  return (
    <div>
      
      <div className="AboutHeader" style={{ backgroundImage: "url('http://127.0.0.1:5500/assets/img/bg/breadcrumb_bg.jpg')" ,height:"300px",}}>
     <div className="AboutHeaderPara">
      <h1>Contact Us</h1>
    <div style={{display:"flex"}}><p>Home</p><FaLongArrowAltRight  style={{fontSize:"30px",marginLeft:"20px",marginTop:"2px"}}/><p style={{marginLeft:"10px",color:"#d70006"}}>Contact Us</p> </div>
    </div>
    </div>

    <div className="contact-grid">
      <div className="contact-card">
        <h2>{Contact[0]?.place}</h2>
        <p>{Contact[0]?.Street}</p>
        <h2>{Contact[0]?.mobileno}</h2>
        <p>{Contact[0]?.opens}</p>
        <p>{Contact[0]?.Satsun}</p>
        <p>{Contact[0]?.email}</p>
      </div>

      <div className="contact-card">
        <h2>{Contact[1]?.place}</h2>
        <p>{Contact[1]?.Street}</p>
        <h2>{Contact[1]?.mobileno}</h2>
        <p>{Contact[1]?.opens}</p>
        <p>{Contact[1]?.Satsun}</p>
        <p>{Contact[1]?.email}</p>
      </div>

      <div className="contact-card">
        <h2>{Contact[2]?.place}</h2>
        <p>{Contact[2]?.Street}</p>
        <h2>{Contact[2]?.mobileno}</h2>
        <p>{Contact[2]?.opens}</p>
        <p>{Contact[2]?.Satsun}</p>
        <p>{Contact[2]?.email}</p>
      </div>
    </div>
    <div className="form-container">
      <h1>Send Us Message</h1>

      <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
    >
      <div className="input-group">
        <input
          type="text"
          placeholder="Name"
          value={Email.name}
          id="emailname1"
          name="name"
          onChange={update}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={Email.phone}
          id="emailphone1"
          name="phone"
          onChange={update}
        />
        <input
          type="email"
          placeholder="Email"
          value={Email.email}
          id="emailmail"
          name="email"
          onChange={update}
        />
      </div>

      <div className="subject-group">
        <input
          type="text"
          placeholder="Subject"
          value={Email.sub}
          id="emailsub"
          name="sub"
          onChange={update}
        />
      </div>

      <div className="textarea-group">
        <textarea
          placeholder="Your Message"
          value={Email.msg}
          id="emailmsg"
          name="msg"
          onChange={update}
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
    </div>
    </div>
  )
}

export default ContactUsPage