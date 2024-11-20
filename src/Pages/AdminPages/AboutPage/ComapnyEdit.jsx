import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function CompanyEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [Company, setCompany] = useState({
        title:"",
        content:"",
        companyimg1:"",
        description:"",
       
});
  

  const update = (e) => {
    setCompany({ ...Company, [e.target.name]: e.target.value });
  };
   

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getCompany/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCompany(res.data); // Set the home data for the form
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/updateCompany/${id}`, Company, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        navigate("/Company"); // Navigate back to the Banner view page
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const handleUpdate = () => {
  //     axios.post("http://localhost:4000/createCompany", Company, {
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
    <div>
    <h2>Create Company Content</h2>
    <form onChange={update} onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
      {/* Title Input */}
      <label>Page Title</label>
      <input
        name="title"
        type='text'
        className="form-control"
        placeholder="Enter page title "
        value={Company.title}
       
        rows="2"
      />

      {/* Content Input */}
      <label>Page Content</label>
      <textarea
        name="content"
        className="form-control"
        placeholder="Enter page content (use <b>, <i>, etc.)"
        value={Company.content}
        
        rows="5"
      />

      {/* Description Input */}
      <label>Description</label>
      <textarea
        name="description"
        className="form-control"
        placeholder="Enter description (use <b>, <i>, etc.)"
        value={Company.description}
      
        rows="3"
      />

      {/* File Input */}
      <label>Image</label>
      <input
        type="text"
        name="companyimg1"
        className="form-control"
       
        value={Company.companyimg1}
      />

      {/* Submit and Cancel Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
       
      </div>
    </form>
  </div>
  )
}

export default CompanyEdit