import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Profile() {
    const [profile, setProfile] = useState({});
    const [userId, setuserId] = useState("");
    const [token, setToken] = useState("")
    useEffect(() => {
        if (token) {
            axios.get(`http://localhost:4000/proview/${userId}`, {
                headers: { Authorization: `Bearer ${token}` }
            }).then(res => {
                setProfile(res.data);
            }).catch(err => {
                console.error(err);
            });
        }
    }, [userId, setProfile, token]);
  return (
    <div className="profile">
            <h2>Welcome, {profile.name}!</h2>
            <div className='profile-item'>
                <div className="profile-details">
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    
                </div>
                <div className="edit-logo">
                    <Link to={`/profileUpdate/${Profile._id}`}>
                        
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default Profile