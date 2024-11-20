import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function WelcomeNoteView() {
    const [welcomeNote, setwelcomeNote] = useState([]);
    const { id } = useParams();
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get("http://localhost:4000/viewwelcomeNote", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
      setwelcomeNote(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [token]);
  return (
    <div class="table-container">
    <table class="simple-banner-table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Description</th>
                <th>point1 </th>
                <th>point2</th>
                <th>point3</th>
                <th>point4</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{welcomeNote[0]?.title}</td>
                <td>{welcomeNote[0]?.content}</td>
                <td>{welcomeNote[0]?.description}</td>
                <td>{welcomeNote[0]?.point1}</td>
                <td>{welcomeNote[0]?.point2}</td>
                <td>{welcomeNote[0]?.point3}</td>
                <td>{welcomeNote[0]?.point4}</td>
                <Link to={`/welcomeNoteEdit/${welcomeNote[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
            </tr>
         
        </tbody>
    </table>
</div>

   
  )
}

export default WelcomeNoteView