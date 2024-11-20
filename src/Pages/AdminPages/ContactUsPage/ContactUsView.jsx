import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function ContactUsView() {
    const { id } = useParams();
    const [Contact, setContact] = useState([]);
    const token = localStorage.getItem('token');
    
    
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
    return (
    <div>
    <div class="table-container">
    <table class="simple-banner-table">
    <thead>
        <tr>
            
            <th>place</th>
            <th>Street</th>
            <th>mobileno</th>
            <th>opens</th>
            <th>Satsun</th>
            <th>email</th>
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>{Contact[0]?.place}</td>
        <td>{Contact[0]?.Street}</td>
        <td>{Contact[0]?.mobileno}</td>
        <td>{Contact[0]?.opens}</td>
        <td>{Contact[0]?.Satsun}</td>
        <td>{Contact[0]?.email}</td>
        <Link to={`/ContactEdit/${Contact[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Contact[1]?.place}</td>
        <td>{Contact[1]?.Street}</td>
        <td>{Contact[1]?.mobileno}</td>
        <td>{Contact[1]?.opens}</td>
        <td>{Contact[1]?.Satsun}</td>
        <td>{Contact[1]?.email}</td>
        <Link to={`/ContactEdit/${Contact[1]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Contact[2]?.place}</td>
        <td>{Contact[2]?.Street}</td>
        <td>{Contact[2]?.mobileno}</td>
        <td>{Contact[2]?.opens}</td>
        <td>{Contact[2]?.Satsun}</td>
        <td>{Contact[2]?.email}</td>
        <Link to={`/ContactEdit/${Contact[2]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
       
     
    </tbody>
    </table>
    </div>
    
    </div>
  )
}

export default ContactUsView