import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ClientEdit() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [Client, setClient] = useState({
        logo1:" ",  logo2:" ", logo3:" ", logo4:" ",logo5:" ",logo6:" "
    });
    const token = localStorage.getItem('token');
  
    const update = (e) => {
      setClient({ ...Client, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      axios
        .get(`http://localhost:4000/getclient/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
          setClient(res.data); // Set the home data for the form
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id, token]);
  
    const handleUpdate = () => {
      axios
        .put(`http://localhost:4000/updateclient/${id}`, Client, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
          navigate("/Clients"); // Navigate back to the Banner view page
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
  return (
    <div className='add'>
    <h2 className='add-title'>logos</h2>
    <form className='form' onChange={update} onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
        <div className="form-group">
            <label >logo1</label>
            <input
                type="text"
                id="logo1"
                name='logo1'
                placeholder='Enter The logo1 url '
                value={Client.logo1}
                required
            />
        </div>
        <div className="form-group">
            <label >logo2</label>
            <input
                type="text"
                id="logo2"
                name='logo2'
                placeholder='Enter The logo2 url '
                value={Client.logo2}
                required
            />
        </div>
        <div className="form-group">
            <label >logo3</label>
            <input
                type="text"
                id="logo3"
                name='logo3'
                placeholder='Enter The logo3 url '
                value={Client.logo3}
                required
            />
        </div>
        <div className="form-group">
            <label >logo4</label>
            <input
                type="text"
                id="logo4"
                name='logo4'
                placeholder='Enter The logo4 url '
                value={Client.logo4}
                required
            />
        </div>
        <div className="form-group">
            <label >logo5</label>
            <input
                type="text"
                id="logo5"
                name='logo5'
                placeholder='Enter The logo5 url '
                value={Client.logo5}
                required
            />
        </div>
        <div className="form-group">
            <label >logo6</label>
            <input
                type="text"
                id="logo6"
                name='logo6'
                placeholder='Enter The logo6 url '
                value={Client.logo6}
                required
            />
        </div>
        
        
       
        
        <button type='submit' className='add-button'>Add</button>
    </form>
</div>
  )
}

export default ClientEdit