import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function GalleryEdit() {
    const { id } = useParams();
    const [Gallery, setGallery] = useState([]);
    const token = localStorage.getItem('token');
  
  
    useEffect(() => {
      axios.get("http://localhost:4000/viewGallery", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res);
        setGallery(res.data);
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
             <th>Edit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        
        <td>{Gallery[0]?.Gallerytitle}</td>
        <td>{Gallery[0]?.Gallerycontent} </td>
        <td><img src={Gallery[0]?.Galleryimg1} alt="logo1" class="simple-img" /></td>
        <Link to={`/GalleryEdit/${Gallery[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Gallery[1]?.Gallerytitle}</td>
        <td>{Gallery[1]?.Gallerycontent}</td>
        <td><img src={Gallery[1]?.Galleryimg1} alt="logo1" class="simple-img" /></td>
        <Link to={`/GalleryEdit/${Gallery[1]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Gallery[2]?.Gallerytitle}</td>
        <td>{Gallery[2]?.Gallerycontent}</td>
         <td><img src= {Gallery[2]?.Galleryimg1} alt="logo1" class="simple-img" /></td>
        <Link to={`/GalleryEdit/${Gallery[2]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Gallery[3]?.Gallerytitle}</td>
        <td> {Gallery[3]?.Gallerycontent}</td>
       
        <td><img src={Gallery[3]?.Galleryimg1} alt="logo1" class="simple-img" /></td>
        <Link to={`/GalleryEdit/${Gallery[3]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Gallery[4]?.Gallerytitle}</td>
        <td> {Gallery[4]?.Gallerycontent}</td>
       
        <td><img src={Gallery[4]?.Galleryimg1} alt="logo1" class="simple-img" /></td>
        <Link to={`/GalleryEdit/${Gallery[4]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Gallery[5]?.Gallerytitle}</td>
        <td> {Gallery[5]?.Gallerycontent}</td>
       
        <td><img src={Gallery[5]?.Galleryimg1} alt="logo1" class="simple-img" /></td>
        <Link to={`/GalleryEdit/${Gallery[5]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Gallery[6]?.Gallerytitle}</td>
        <td> {Gallery[6]?.Gallerycontent}</td>
       
        <td><img src={Gallery[6]?.Galleryimg1} alt="logo1" class="simple-img" /></td>
        <Link to={`/GalleryEdit/${Gallery[6]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Gallery[7]?.Gallerytitle}</td>
        <td> {Gallery[7]?.Gallerycontent}</td>
       
        <td><img src={Gallery[7]?.Galleryimg1} alt="logo1" class="simple-img" /></td>
        <Link to={`/GalleryEdit/${Gallery[7]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        <td>{Gallery[8]?.Gallerytitle}</td>
        <td> {Gallery[8]?.Gallerycontent}</td>
       
        <td><img src={Gallery[8]?.Galleryimg1} alt="logo1" class="simple-img" /></td>
        <Link to={`/GalleryEdit/${Gallery[8]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>

       
     
    </tbody>
</table>
</div>

</div>
  )
}

export default GalleryEdit