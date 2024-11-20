import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ServiceEdit() {
    const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [Service, setService] = useState({
    servicetitle:"",
    servicecontent:"",
        serviceimg1:"",
        serviceimg2:"",
       
});
  

  const update = (e) => {
    setService({ ...Service, [e.target.name]: e.target.value });
  };
   

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getService/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        setService(res.data); // Set the home data for the form
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/updateService/${id}`, Service, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        navigate("/Service"); // Navigate back to the Banner view page
      })
      .catch((err) => {
        console.log(err);
      });
  };
//   const handleUpdate = () => {
//       axios.post("http://localhost:4000/createService", Service, {
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
    <h2 className='add-title'>Add Service </h2>
    <form className='form' onChange={update} onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
    <div className="form-group">
            <label>title</label>
            <input
                type="text"
                id="servicetitle"
                name='servicetitle'
                placeholder='Enter The title'
                value={Service.servicetitle}
                required
            />
        </div>
        
       
        
        
        <div className="form-group">
            <label>content</label>
            <input
                type="text"
                id="servicecontent"
                name='servicecontent'
                placeholder='Enter The image1'
                value={Service.servicecontent}
                required
            />
        </div>
        <div className="form-group">
            <label>serviceimg1</label>
            <input
                type="text"
                id="serviceimg1"
                name='serviceimg1'
                placeholder='Enter The image1'
                value={Service.serviceimg1}
                required
            />
        </div>
        
        <div className="form-group">
            <label>serviceimg2</label>
            <input
                type="text"
                id="serviceimg2"
                name='serviceimg2'
                placeholder='Enter The image2'
                value={Service.serviceimg2}
                required
            />
        </div>
        
        
        <button type='submit' className='add-button'>Add </button>
    </form>
</div>
  )
}

export default ServiceEdit