import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function FaqEdit() 
{
    const navigate = useNavigate();
    const { id } = useParams();
    const token = localStorage.getItem('token');
    const [Faq, setFaq] = useState({
        Faqtitle:"",
        Faqanswer:"",
       
         
         
  });
    
  
    const update = (e) => {
        setFaq({ ...Faq, [e.target.name]: e.target.value });
    };
     
  
    useEffect(() => {
      axios
        .get(`http://localhost:4000/getFaq/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
            setFaq(res.data); // Set the home data for the form
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id, token]);
  
    const handleUpdate = () => {
      axios
        .put(`http://localhost:4000/updateFaq/${id}`, Faq, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((res) => {
          navigate("/Faq"); // Navigate back to the Banner view page
        })
        .catch((err) => {
          console.log(err);
        });
    };
    // const handleUpdate = () => {
    //     axios.post("http://localhost:4000/createFaq", Faq, {
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
              <label>Questions</label>
              <input
                  type="text"
                  id="Faqtitle"
                  name='Faqtitle'
                  placeholder='Enter The title'
                  value={Faq.Faqtitle}
                  required
              />
          </div>
          
         
          
          
          <div className="form-group">
              <label>Answer</label>
              <input
                  type="text"
                  id="Faqanswer"
                  name='Faqanswer'
                  placeholder='Enter The image1'
                  value={Faq.Faqanswer}
                  required
              />
          </div>
          
         
          
          
          <button type='submit' className='add-button'>Add </button>
      </form>
  </div>
  )
}

export default FaqEdit