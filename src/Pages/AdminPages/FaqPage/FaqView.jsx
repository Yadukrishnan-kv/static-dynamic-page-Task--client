import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function FaqView() { 
    const { id } = useParams();
const [Faq, setFaq] = useState([]);
const token = localStorage.getItem('token');


useEffect(() => {
  axios.get("http://localhost:4000/viewFaq", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    console.log(res);
    setFaq(res.data);
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
        
        <th>Question</th>
        <th>Answer</th>
        
         <th>Edit</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td>{Faq[0]?.Faqtitle}</td>
    <td>{Faq[0]?.Faqanswer} </td>
    <Link to={`/FaqEdit/${Faq[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
    </tr>
    <tr>
    <td>{Faq[1]?.Faqtitle}</td>
    <td>{Faq[1]?.Faqanswer}</td>
    <Link to={`/FaqEdit/${Faq[1]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
    </tr>
    <tr>
    <td>{Faq[2]?.Faqtitle}</td>
    <td>{Faq[2]?.Faqanswer}</td>
    <Link to={`/FaqEdit/${Faq[2]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
    </tr>
    <tr>
    <td>{Faq[3]?.Faqtitle}</td>
    <td>{Faq[3]?.Faqanswer}</td>
    <Link to={`/FaqEdit/${Faq[3]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
    </tr>
    <tr>
    <td>{Faq[4]?.Faqtitle}</td>
    <td>{Faq[4]?.Faqanswer}</td>
    <Link to={`/FaqEdit/${Faq[4]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
    </tr>
    <tr>
    <td>{Faq[5]?.Faqtitle}</td>
    <td>{Faq[5]?.Faqanswer}</td>
    <Link to={`/FaqEdit/${Faq[5]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
    </tr>

   
 
</tbody>
</table>
</div>

</div>
  )
}

export default FaqView