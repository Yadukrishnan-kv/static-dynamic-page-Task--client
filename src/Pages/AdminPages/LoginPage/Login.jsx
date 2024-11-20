import React, { useState } from 'react'
import './Login.css'
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

import { setToken } from '../../../Localstorage';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [login, setlogin] = useState({ email: '', password: '' });
  const [userId, setUserId] = useState("");
  const updateform = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleupdate = () => {
    axios.post("http://localhost:4000/login", login,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        const data = res.data;
        localStorage.setItem('token', data.token);
        const decodedToken = jwtDecode(data.token);
        setToken(data.token);
        setUserId(decodedToken.sub._id);
        navigate('/AdminHome');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-page">
    <div className="login-container">
      <div className="login-title">
        <h2>Sign In!</h2>
        <p>Please enter your details</p>
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
            type="email"
            placeholder="email"
            required
            name="email"
            value={login.email}
            
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={login.password}
            
          />
        </div>
        <div className="login-footer">
          <button className="login-button">Login In</button>
          
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default Login