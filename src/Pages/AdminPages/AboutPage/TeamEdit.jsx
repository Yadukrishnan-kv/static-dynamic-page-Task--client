import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function TeamEdit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const [Team, setTeam] = useState({
        memberimg:"",
        membername:"",
        position:"",
        
         
  });
    
  
    const update = (e) => {
        setTeam({ ...Team, [e.target.name]: e.target.value });
    };
     
  
    useEffect(() => {
      axios
        .get(`http://localhost:4000/getTeam/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
            setTeam(res.data); // Set the home data for the form
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id, token]);
  
    const handleUpdate = () => {
      axios
        .put(`http://localhost:4000/updateTeam/${id}`, Team, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
          navigate("/Team"); // Navigate back to the Banner view page
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // const handleUpdate = () => {
    //     axios.post("http://localhost:4000/createTeam", Team, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }).then((res) => {
    //         console.log(res);
            
    //         navigate("/Home");
    //     }).catch((err) => {
    //         console.log(err);
           
    //     });
    // };
  return (
    <div className='add'>
      <h2 className='add-title'>Add Faq </h2>
      <form className='form' onChange={update} onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
      <div className="form-group">
              <label>img</label>
              <input
                  type="text"
                  id="memberimg"
                  name='memberimg'
                  placeholder='Enter The img url'
                  value={Team.memberimg}
                  required
              />
          </div>
          
         
          
          
          <div className="form-group">
              <label>name</label>
              <input
                  type="text"
                  id="membername"
                  name='membername'
                  placeholder='Enter The name'
                  value={Team.membername}
                  required
              />
          </div>

          <div className="form-group">
              <label>content</label>
              <input
                  type="text"
                  id="position"
                  name='position'
                  placeholder='Enter The position'
                  value={Team.position}
                  required
              />
          </div>
          
         
          
          
          <button type='submit' className='add-button'>Add </button>
      </form>
  </div>
  )
}

export default TeamEdit