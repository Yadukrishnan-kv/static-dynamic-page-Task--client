import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ContactEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const [Contact, setContact] = useState({
        place:"",
        Street:"",
        mobileno:"",
        opens:"",
         Satsun:"",
        email:""
         
         
  });
    
  
    const update = (e) => {
        setContact({ ...Contact, [e.target.name]: e.target.value });
    };
     
  
    useEffect(() => {
      axios
        .get(`http://localhost:4000/getContact/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
            setContact(res.data); // Set the home data for the form
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id, token]);
  
    const handleUpdate = () => {
      axios
        .put(`http://localhost:4000/updateContact/${id}`, Contact, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
          navigate("/ContactUs"); // Navigate back to the Banner view page
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // const handleUpdate = () => {
    //     axios.post("http://localhost:4000/createContact", Contact, {
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
      <h2 className='add-title'>Add Faq </h2>
      <form className='form' onChange={update} onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
      <div className="form-group">
              <label>place</label>
              <input
                  type="text"
                  id="place"
                  name='place'
                  placeholder='Enter The place'
                  value={Contact.place}
                  required
              />
          </div>
          <div className="form-group">
              <label>Street</label>
              <input
                  type="text"
                  id="Street"
                  name='Street'
                  placeholder='Enter The Street'
                  value={Contact.Street}
                  required
              />
          </div>
          <div className="form-group">
              <label>mobileno</label>
              <input
                  type="text"
                  id="mobileno"
                  name='mobileno'
                  placeholder='Enter The mobileno'
                  value={Contact.mobileno}
                  required
              />
          </div>
          <div className="form-group">
              <label>opens</label>
              <input
                  type="text"
                  id="opens"
                  name='opens'
                  placeholder='Enter The opens'
                  value={Contact.opens}
                  required
              />
          </div>
          <div className="form-group">
              <label>Satsun opens</label>
              <input
                  type="text"
                  id="Satsun"
                  name='Satsun'
                  placeholder='Enter The Satsun'
                  value={Contact.Satsun}
                  required
              />
          </div>
          <div className="form-group">
              <label>email</label>
              <input
                  type="text"
                  id="email"
                  name='email'
                  placeholder='Enter The email'
                  value={Contact.email}
                  required
              />
          </div>
          
         
          
          
          <button type='submit' className='add-button'>Add </button>
      </form>
  </div>
  )
}

export default ContactEdit