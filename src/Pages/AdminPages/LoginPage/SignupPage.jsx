import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../../Localstorage';
import axios from 'axios';

function SignupPage() {

  const [form, setform] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const updateform = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleupdate = async () => {
    axios.post("http://localhost:4000/register", form)
      .then((res) => {
        const data = res.data;
        setToken(data.token);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <div className="login-title">
        <h2>Create Account</h2>
        <p>Sign up with your details</p>
      </div>
      <form
         onChange={updateform}
         onSubmit={(e) => {
           e.preventDefault();
           handleupdate();
         }}
      >
        <div className="login-input">
          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            value={form.name}
            
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={form.email}
           
          />
         
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={form.password}
           
          />
        </div>
        
        <button className="login-button">Sign Up</button>
        
      </form>
    </div>
  </div>
  )
}

export default SignupPage