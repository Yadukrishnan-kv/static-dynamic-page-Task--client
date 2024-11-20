import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import './GalleryPage.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GalleryPage() {
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

         <div className="AboutHeader" style={{ backgroundImage: "url('http://127.0.0.1:5500/assets/img/bg/breadcrumb_bg.jpg')" ,height:"300px",}}>
     <div className="AboutHeaderPara">
      <h1>Portfolio</h1>
    <div style={{display:"flex"}}><p>Home</p><FaLongArrowAltRight  style={{fontSize:"30px",marginLeft:"20px",marginTop:"2px"}}/><p style={{marginLeft:"10px",color:"#d70006"}}>Portfolio</p> </div>
    </div>
    </div>


    <div className="image-grid">
      <div className="image-container">
        <img src={Gallery[0]?.Galleryimg1} alt="Image 1" />
        <div className="overlay">{Gallery[0]?.Gallerytitle} <br/> {Gallery[0]?.Gallerycontent}</div>
        
      </div>
      <div className="image-container">
        <img src={Gallery[1]?.Galleryimg1} alt="Image 1" />
        <div className="overlay">{Gallery[1]?.Gallerytitle} <br/> {Gallery[1]?.Gallerycontent}</div>
        
      </div>
      <div className="image-container">
        <img src={Gallery[2]?.Galleryimg1} alt="Image 1" />
        <div className="overlay">{Gallery[2]?.Gallerytitle} <br/> {Gallery[2]?.Gallerycontent}</div>
        
      </div>
      <div className="image-container">
        <img src={Gallery[3]?.Galleryimg1} alt="Image 1" />
        <div className="overlay">{Gallery[3]?.Gallerytitle} <br/> {Gallery[3]?.Gallerycontent}</div>
        
      </div>
      <div className="image-container">
        <img src={Gallery[4]?.Galleryimg1} alt="Image 1" />
        <div className="overlay">{Gallery[4]?.Gallerytitle} <br/> {Gallery[4]?.Gallerycontent}</div>
        
      </div>
      <div className="image-container">
        <img src={Gallery[5]?.Galleryimg1} alt="Image 1" />
        <div className="overlay">{Gallery[5]?.Gallerytitle} <br/> {Gallery[5]?.Gallerycontent}</div>
        
      </div>
      <div className="image-container">
        <img src={Gallery[6]?.Galleryimg1} alt="Image 1" />
        <div className="overlay">{Gallery[6]?.Gallerytitle} <br/> {Gallery[6]?.Gallerycontent}</div>
        
      </div>
      <div className="image-container">
        <img src={Gallery[7]?.Galleryimg1} alt="Image 1" />
        <div className="overlay">{Gallery[7]?.Gallerytitle} <br/> {Gallery[7]?.Gallerycontent}</div>
        
      </div>
      <div className="image-container">
        <img src={Gallery[8]?.Galleryimg1} alt="Image 1" />
        <div className="overlay">{Gallery[8]?.Gallerytitle} <br/> {Gallery[8]?.Gallerycontent}</div>
        
      </div>
    </div>


    </div>
  )
}

export default GalleryPage