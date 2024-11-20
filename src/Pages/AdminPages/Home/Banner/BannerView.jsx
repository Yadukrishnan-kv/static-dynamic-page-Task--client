import React, { useEffect, useState } from 'react'
import './BannerView.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function BannerView() {
    const [view, setView] = useState([]);
    const { id } = useParams();
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get("http://localhost:4000/view", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
      setView(res.data);
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
                <th>Title</th>
                <th>Content</th>
                <th>Description</th>
                
                <th>Additional Image 1</th>
                <th>Additional Image 2</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{view[0]?.title}</td>
                <td>{view[0]?.content}</td>
                <td>{view[0]?.description}</td>
                <td><img src={view[0]?.image} alt="Banner" class="simple-img" /></td>
                <td><img src={view[0]?.images} alt="Image 1" class="simple-img" /></td>
               
                <Link to={`/BannerEdit/${view[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
            </tr>
         
        </tbody>
    </table>
</div>

    </div>
  )
}

export default BannerView