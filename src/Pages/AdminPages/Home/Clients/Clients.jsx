import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
function Clients() {

    const { id } = useParams();
  const [Client, setClient] = useState([]
   );
  const token = localStorage.getItem('token');

  const update = (e) => {
    setClient({ ...Client, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/viewclient", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res);
      setClient(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [token]);

  return (
    <div>
    <div class="table-container">
<table class="simple-banner-table">
    <thead>
        <tr>
            <th>logo1</th>
            <th>logo2</th>
            <th>logo3</th>
            <th>logo4</th>
            <th>logo5</th>
            <th>logo6</th>
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td><img src={Client[0]?.logo1} alt="logo1" class="simple-img" /></td>
        <td><img src={Client[0]?.logo2} alt="logo2" class="simple-img" /></td>
        <td><img src={Client[0]?.logo3} alt="logo3" class="simple-img" /></td>
        <td><img src={Client[0]?.logo4} alt="logo4" class="simple-img" /></td>
        <td><img src={Client[0]?.logo5} alt="logo5" class="simple-img" /></td>
        <td><img src={Client[0]?.logo6} alt="logo6" class="simple-img" /></td>
           
            <Link to={`/ClientEdit/${Client[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
     
    </tbody>
</table>
</div>

</div>
  )
}

export default Clients