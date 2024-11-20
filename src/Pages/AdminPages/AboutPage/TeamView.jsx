import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function TeamView() {
    const { id } = useParams();
    const [Team, setTeam] = useState([]);
    const token = localStorage.getItem('token');
  
  
    useEffect(() => {
      axios.get("http://localhost:4000/viewTeam", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res);
        setTeam(res.data);
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
            
            <th>img</th>
            <th>Name</th>
            <th>Position</th>
           
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        
        <td><img src={Team[0]?.memberimg} alt="logo1" class="simple-img" /></td>
        <td>{Team[0]?.membername}</td>
        <td>{Team[0]?.position}</td>
       <Link to={`/TeamEdit/${Team[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        
        <td><img src={Team[1]?.memberimg} alt="logo1" class="simple-img" /></td>
        <td>{Team[1]?.membername}</td>
        <td>{Team[1]?.position}</td>
       <Link to={`/TeamEdit/${Team[1]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        
        <td><img src={Team[2]?.memberimg} alt="logo1" class="simple-img" /></td>
        <td>{Team[3]?.membername}</td>
        <td>{Team[2]?.position}</td>
       <Link to={`/TeamEdit/${Team[2]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        
        <td><img src={Team[3]?.memberimg} alt="logo1" class="simple-img" /></td>
        <td>{Team[3]?.membername}</td>
        <td>{Team[3]?.position}</td>
       <Link to={`/TeamEdit/${Team[3]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        
    </tbody>
</table>
</div>

</div>
  )
}

export default TeamView