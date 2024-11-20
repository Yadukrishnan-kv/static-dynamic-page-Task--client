import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Welcomenotes() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [welcomeNote, setwelcomeNote] = useState({
    title:" ",  content:" ", description:" ", point1:" ",point2:" ",point3:" ",point4:""
  });
  const token = localStorage.getItem('token');

  const update = (e) => {
    setwelcomeNote({ ...welcomeNote, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getproductswelcomeNote/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        setwelcomeNote(res.data); // Set the home data for the form
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/updatewelcomeNote/${id}`, welcomeNote, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        navigate("/Welcomenotes"); // Navigate back to the Banner view page
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <div className='add'>
    <h2 className='add-title'>welcomeNote</h2>
    <form className='form' onChange={update} onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
        <div className="form-group">
            <label htmlFor="image">title</label>
            <input
                type="text"
                id="title"
                name='title'
                placeholder='Enter The title '
                value={welcomeNote.title}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="name">content</label>
            <input
                type="text"
                id="content"
                name='content'
                value={welcomeNote.content}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="name">description</label>
            <input
                type="text"
                id="description"
                name='description'
                value={welcomeNote.description}
                required
            />
        </div>
       
        <div className="form-group">
            <label htmlFor="name">point1</label>
            <input
                type="text"
                id="point1"
                name='point1'
                value={welcomeNote.point1}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="name">point2</label>
            <input
                type="text"
                id="point2"
                name='point2'
                value={welcomeNote.point2}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="name">point3</label>
            <input
                type="text"
                id="point3"
                name='point3'
                value={welcomeNote.point3}
                required
            />
        </div>
        <div className="form-group">
            <label htmlFor="name">point4</label>
            <input
                type="text"
                id="point4"
                name='point4'
                value={welcomeNote.point4}
                required
            />
        </div>
        <button type='submit' className='add-button'>Add </button>
    </form>
</div>
  )
}

export default Welcomenotes