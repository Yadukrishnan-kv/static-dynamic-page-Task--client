import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function ServiceViews() {
    const { id } = useParams();
    const [Service, setService] = useState([]);
    const token = localStorage.getItem('token');
  
  
    useEffect(() => {
      axios.get("http://localhost:4000/viewService", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res);
        setService(res.data);
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
            <th>serviceimg1</th>
            <th>serviceimg1</th>
           
            
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>{Service[0]?.servicetitle}</td>
        <td>{Service[0]?.servicecontent}</td>
        <td><img src={Service[0]?.serviceimg1} alt="logo1" class="simple-img" /></td>
        <td><img src={Service[0]?.serviceimg2} alt="logo1" class="simple-img" /></td>
        <Link to={`/ServiceEdit/${Service[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>

        <tr>
        <td>{Service[2]?.servicetitle}</td>
        <td>{Service[2]?.servicecontent}</td>
        <td><img src={Service[2]?.serviceimg1} alt="logo1" class="simple-img" /></td>
        <td><img src={Service[2]?.serviceimg2} alt="logo1" class="simple-img" /></td>
        <Link to={`/ServiceEdit/${Service[2]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>

        <tr>
        <td>{Service[1]?.servicetitle}</td>
        <td>{Service[1]?.servicecontent}</td>
        <td><img src={Service[1]?.serviceimg1} alt="logo1" class="simple-img" /></td>
        <td><img src={Service[1]?.serviceimg2} alt="logo1" class="simple-img" /></td>
        <Link to={`/ServiceEdit/${Service[1]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>

        <tr>
        <td>{Service[3]?.servicetitle}</td>
        <td>{Service[3]?.servicecontent}</td>
        <td><img src={Service[3]?.serviceimg1} alt="logo1" class="simple-img" /></td>
        <td><img src={Service[3]?.serviceimg2} alt="logo1" class="simple-img" /></td>
        <Link to={`/ServiceEdit/${Service[3]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>

        <tr>
        <td>{Service[4]?.servicetitle}</td>
        <td>{Service[4]?.servicecontent}</td>
        <td><img src={Service[4]?.serviceimg1} alt="logo1" class="simple-img" /></td>
        <td><img src={Service[4]?.serviceimg2} alt="logo1" class="simple-img" /></td>
        <Link to={`/ServiceEdit/${Service[4]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>

        <tr>
        <td>{Service[5]?.servicetitle}</td>
        <td>{Service[5]?.servicecontent}</td>
        <td><img src={Service[5]?.serviceimg1} alt="logo1" class="simple-img" /></td>
        <td><img src={Service[5]?.serviceimg2} alt="logo1" class="simple-img" /></td>
        <Link to={`/ServiceEdit/${Service[5]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>

        
     
    </tbody>
</table>
</div>

</div>
  )
}

export default ServiceViews