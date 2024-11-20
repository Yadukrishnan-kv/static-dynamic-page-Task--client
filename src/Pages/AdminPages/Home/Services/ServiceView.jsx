import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function ServiceView() {
    const { id } = useParams();
    const [Services, setServices] = useState([]
     );
    const token = localStorage.getItem('token');
  
    const update = (e) => {
      setServices({ ...Services, [e.target.name]: e.target.value });
    };
  
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
  
  return (
    <div>
    <div class="table-container">
<table class="simple-banner-table">
    <thead>
        <tr>
            <th>title</th>
            <th>content</th>
            <th>image1</th>
            
            <th>Sub-title1</th>
            
            <th>Sub-content1</th>
           
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>{Services[0]?.title}</td>
        <td>{Services[0]?.content}</td>
        <td><img src={Services[0]?.servicesimg1} alt="logo1" class="simple-img" /></td>
        
        <td>{Services[0]?.servicesimg1title}</td>
       
        <td>{Services[0]?.servicesimg1content}</td>
        
           
            <Link to={`/ServicesEdit/${Services[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Services[1]?.title}</td>
        <td>{Services[1]?.content}</td>
        <td><img src={Services[1]?.servicesimg1} alt="logo1" class="simple-img" /></td>
        
        <td>{Services[1]?.servicesimg1title}</td>
       
        <td>{Services[1]?.servicesimg1content}</td>
        
           
            <Link to={`/ServicesEdit/${Services[1]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Services[2]?.title}</td>
        <td>{Services[2]?.content}</td>
        <td><img src={Services[2]?.servicesimg1} alt="logo1" class="simple-img" /></td>
        
        <td>{Services[2]?.servicesimg1title}</td>
       
        <td>{Services[2]?.servicesimg1content}</td>
        
           
            <Link to={`/ServicesEdit/${Services[2]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Services[3]?.title}</td>
        <td>{Services[3]?.content}</td>
        <td><img src={Services[3]?.servicesimg1} alt="logo1" class="simple-img" /></td>
        
        <td>{Services[3]?.servicesimg1title}</td>
       
        <td>{Services[3]?.servicesimg1content}</td>
        
           
            <Link to={`/ServicesEdit/${Services[3]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
     
    </tbody>
</table>
</div>

</div>
  )
}

export default ServiceView