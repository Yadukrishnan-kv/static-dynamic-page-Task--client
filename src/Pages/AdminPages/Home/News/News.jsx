import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function News() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const [News, setNews] = useState({
    title:"",
        content:"",
        newsimg1:"",
        newsdate:"",
        Newsimg1title:"",
        Newsimg1content:""
      


  });
  

  const update = (e) => {
    setNews({ ...News, [e.target.name]: e.target.value });
  };
   

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getNews/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        setNews(res.data); // Set the home data for the form
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/updateNews/${id}`, News, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((res) => {
        navigate("/News"); // Navigate back to the Banner view page
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const handleUpdate = () => {
  //     axios.post("http://localhost:4000/createNews", News, {
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
    <h2 className='add-title'>Add News </h2>
    <form className='form' onChange={update} onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
    <div className="form-group">
            <label>title</label>
            <input
                type="text"
                id="newstitle"
                name='newstitle'
                placeholder='Enter The title'
                value={News.title}
                required
            />
        </div>
        
       
        
        
        <div className="form-group">
            <label>content</label>
            <input
                type="text"
                id="newscontent"
                name='newscontent'
                placeholder='Enter The image1'
                value={News.content}
                required
            />
        </div>
        <div className="form-group">
            <label>newsimg1</label>
            <input
                type="text"
                id="newsimg1"
                name='newsimg1'
                placeholder='Enter The image1'
                value={News.newsimg1}
                required
            />
        </div>
        
        <div className="form-group">
            <label>newsdate</label>
            <input
                type="text"
                id="newsdate"
                name='newsdate'
                placeholder='Enter The image1'
                value={News.newsdate}
                required
            />
        </div>
        <div className="form-group">
            <label>Newsimg1title</label>
            <input
                type="text"
                id="Newsimg1title"
                name='Newsimg1title'
                placeholder='Enter The image1'
                value={News.Newsimg1title}
                required
            />
        </div>
        <div className="form-group">
            <label>Newsimg1content</label>
            <input
                type="text"
                id="Newsimg1content"
                name='Newsimg1content'
                placeholder='Enter The image1'
                value={News.Newsimg1content}
                required
            />
        </div>
        
        <button type='submit' className='add-button'>Add </button>
    </form>
</div>
  )
}

export default News