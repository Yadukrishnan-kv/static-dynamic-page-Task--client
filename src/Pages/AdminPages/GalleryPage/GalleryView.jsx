import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function GalleryView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const [Gallery, setGallery] = useState({
        Galleryimg1:"",
        Gallerytitle:"",
        Gallerycontent:"",
         
         
  });
    
  
    const update = (e) => {
        setGallery({ ...Gallery, [e.target.name]: e.target.value });
    };
     
  
    useEffect(() => {
      axios
        .get(`http://localhost:4000/getGallery/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
            setGallery(res.data); // Set the home data for the form
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id, token]);
  
    const handleUpdate = () => {
      axios
        .put(`http://localhost:4000/updateGallery/${id}`, Gallery, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
          navigate("/Gallery"); // Navigate back to the Banner view page
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // const handleUpdate = () => {
    //     axios.post("http://localhost:4000/createGallery", Gallery, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }).then((res) => {
    //         console.log(res);
            
    //         navigate("/AdminHome");
    //     }).catch((err) => {
    //         console.log(err);
           
    //     });
    // };
    return (
      <div className='add'>
      <h2 className='add-title'>Add Service </h2>
      <form className='form' onChange={update} onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
      <div className="form-group">
              <label>title</label>
              <input
                  type="text"
                  id="Gallerytitle"
                  name='Gallerytitle'
                  placeholder='Enter The title'
                  value={Gallery.Gallerytitle}
                  required
              />
          </div>
          
         
          
          
          <div className="form-group">
              <label>content</label>
              <input
                  type="text"
                  id="Gallerycontent"
                  name='Gallerycontent'
                  placeholder='Enter The content'
                  value={Gallery.Gallerycontent}
                  required
              />
          </div>
          <div className="form-group">
              <label>img</label>
              <input
                  type="text"
                  id="Galleryimg1"
                  name='Galleryimg1'
                  placeholder='Enter The image'
                  value={Gallery.Galleryimg1}
                  required
              />
          </div>
          
         
          
          
          <button type='submit' className='add-button'>Add </button>
      </form>
  </div>
  )
}

export default GalleryView