import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Reviews() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [Slider, setSlider] = useState({
    sliderimg1: "",
    slidername: "",
    slidertitle:"",
    slidercontent:"",
      


  });
  

  const update = (e) => {
    setSlider({ ...Slider, [e.target.name]: e.target.value });
  };
   

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getSlider/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSlider(res.data); // Set the home data for the form
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/updateSlider/${id}`, Slider, {
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
//       axios.post("http://localhost:4000/createSlider", Slider, {
//           headers: {
//               'Authorization': `Bearer ${token}`
//           }
//       }).then((res) => {
//           console.log(res);
          
//           navigate("/Services");
//       }).catch((err) => {
//           console.log(err);
         
//       });
//   };

  return (
    <div className='add'>
    <h2 className='add-title'>Add Review </h2>
    <form className='form' onChange={update} onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
    <div className="form-group">
            <label>image1</label>
            <input
                type="text"
                id="sliderimg1"
                name='sliderimg1'
                placeholder='Enter The image1'
                value={Slider.sliderimg1}
                required
            />
        </div>
        
       
        
        
        <div className="form-group">
            <label>slidername</label>
            <input
                type="text"
                id="slidername"
                name='slidername'
                placeholder='Enter The image1'
                value={Slider.slidername}
                required
            />
        </div>
        <div className="form-group">
            <label>slidertitle</label>
            <input
                type="text"
                id="slidertitle"
                name='slidertitle'
                placeholder='Enter The image1'
                value={Slider.slidertitle}
                required
            />
        </div>
        
        <div className="form-group">
            <label>slidercontent</label>
            <input
                type="text"
                id="slidercontent"
                name='slidercontent'
                placeholder='Enter The image1'
                value={Slider.slidercontent}
                required
            />
        </div>
        
        <button type='submit' className='add-button'>Add </button>
    </form>
</div>
  )
}

export default Reviews