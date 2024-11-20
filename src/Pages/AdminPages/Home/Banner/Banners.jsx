import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Banners.css';
import { useNavigate, useParams } from 'react-router-dom';

function Banners() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the banner ID from the URL
  const [home, setHome] = useState({
    title: "",
    content: "",
    description: "",
    banner: "",
    image: "",
    images: "",
  });

  const token = localStorage.getItem('token'); // Get the token from localStorage

  const update = (e) => {
    setHome({ ...home, [e.target.name]: e.target.value });
  };

  // Fetch banner details when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:4000/getproducts/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        setHome(res.data); // Set the home data for the form
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/update/${id}`, home, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        navigate("/BannerView"); // Navigate back to the Banner view page
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="add">
      <h2 className="add-title">Edit Banner</h2>
      <form
        className="form"
        onChange={update}
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(); // Handle the update request
        }}
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the title"
            value={home.title}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            id="content"
            name="content"
            placeholder="Enter the content"
            value={home.content}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="6"
            placeholder="Write description here"
            value={home.description}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Banner Image</label>
          <input
            type="text"
            id="banner"
            name="banner"
            placeholder="Enter the banner image URL"
            value={home.banner}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Upload Images</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter the image URL"
            value={home.image}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Upload Images</label>
          <input
            type="text"
            id="images"
            name="images"
            placeholder="Enter the image URL"
            value={home.images}
            required
          />
        </div>
        <button type="submit" className="add-button">
          Update
        </button>
      </form>
    </div>
  );
}

export default Banners;

