import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function NewsEdit() {
    const { id } = useParams();
    const [News, setNews] = useState([]);
    const token = localStorage.getItem('token');
  
  
    useEffect(() => {
      axios.get("http://localhost:4000/viewNews", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res);
        setNews(res.data);
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
            <th>newsimg1</th>
            <th>newsdate</th>
            <th>Newsimg1title</th>
            <th>Newsimg1content</th>
            
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        
        
        <td>{News[0]?.title}</td>
        <td>{News[0]?.content}</td>
       
        <td><img src={News[0]?.newsimg1} alt="logo1" class="simple-img" /></td>
        <td>{News[0]?.newsdate}</td>
        <td>{News[0]?.Newsimg1title}</td>
        <td>{News[0]?.Newsimg1content}</td>
        
           
            <Link to={`/NewsEdit/${News[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        
        <td>{News[1]?.title}</td>
        <td>{News[1]?.content}</td>
       
        <td><img src={News[1]?.newsimg1} alt="logo1" class="simple-img" /></td>
        <td>{News[1]?.newsdate}</td>
        <td>{News[1]?.Newsimg1title}</td>
        <td>{News[1]?.Newsimg1content}</td>
        
           
            <Link to={`/NewsEdit/${News[1]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        
        <td>{News[2]?.title}</td>
        <td>{News[2]?.content}</td>
       
        <td><img src={News[2]?.newsimg1} alt="logo1" class="simple-img" /></td>
        <td>{News[2]?.newsdate}</td>
        <td>{News[2]?.Newsimg1title}</td>
        <td>{News[2]?.Newsimg1content}</td>
        
           
            <Link to={`/NewsEdit/${News[2]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        
     
    </tbody>
</table>
</div>

</div>
  )
}

export default NewsEdit