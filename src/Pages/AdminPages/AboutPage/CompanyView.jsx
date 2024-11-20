import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function CompanyView() {
  const { id } = useParams();
    const [Company, setCompany] = useState([]);
    const token = localStorage.getItem('token');
  
  
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
    <div class="table-container">
<table class="simple-banner-table">
    <thead>
        <tr>
            
            <th>title</th>
            <th>content</th>
            <th>img</th>
            <th>description</th>
            <th>edit</th>

            
        </tr>
    </thead>
    <tbody>
        <tr>
        
        
        <td>{Company[0]?.title}</td>
        <td>{Company[0]?.content}</td>
       
        <td><img src={Company[0]?.companyimg1} alt="logo1" class="simple-img" /></td>
        <td>{Company[0]?.description}</td>
       
        
        
           
            <Link to={`/CompanyEdit/${Company[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        
    </tbody>
</table>
</div>

</div>
  )
}

export default CompanyView