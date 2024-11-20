import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function Services() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Services, setServices] = useState({
      title: "",
      content: "",
      servicesimg1: "",
      
      servicesimg1title:"",
     
      servicesimg1content:""
     


  });
  const token = localStorage.getItem('token');

  const update = (e) => {
    setServices({ ...Services, [e.target.name]: e.target.value });
  };
   

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getServices/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        setServices(res.data); // Set the home data for the form
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/updateServices/${id}`, Services, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        navigate("/Services"); // Navigate back to the Banner view page
      })
      .catch((err) => {
        console.log(err);
      });
  };
//   const handleUpdate = () => {
//       axios.post("http://localhost:4000/createServices", Services, {
//           headers: {
//               'Authorization': `Bearer ${token}`
//           }
//       }).then((res) => {
//           console.log(res);
          
//           navigate("/Home");
//       }).catch((err) => {
//           console.log(err);
         
//       });
//   };

  return (
      <div className='add'>
          <h2 className='add-title'>Add Services </h2>
          <form className='form' onChange={update} onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
          <div className="form-group">
                  <label>title</label>
                  <input
                      type="text"
                      id="title"
                      name='title'
                      placeholder='Enter The title'
                      value={Services.title}
                      required
                  />
              </div>
              <div className="form-group">
                  <label >content</label>
                  <input
                      type="text"
                      id="content"
                      name='content'
                      placeholder='Enter The content'
                      value={Services.content}
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="image">Upload Image1</label>
                  <input
                      type="text"
                      id="servicesimg1"
                      name='servicesimg1'
                      placeholder='Enter The servicesimg1 Image URL'
                      value={Services.servicesimg1}
                      required
                  />
              </div>
              
              <div className="form-group">
                  <label >Sub-title1</label>
                  <input
                      type="text"
                      id="servicesimg1title"
                      name='servicesimg1title'
                      placeholder='Enter The servicesimg1title'
                      value={Services.servicesimg1title}
                      required
                  />
              </div>
             
              
              <div className="form-group">
                  <label >Sub-content1</label>
                  <input
                      type="text"
                      id="servicesimg1content"
                      name='servicesimg1content'
                      placeholder='Enter The content'
                      value={Services.servicesimg1content}
                      required
                  />
              </div>
            
              
              <button type='submit' className='add-button'>Add </button>
          </form>
      </div>
  )
}

export default Services