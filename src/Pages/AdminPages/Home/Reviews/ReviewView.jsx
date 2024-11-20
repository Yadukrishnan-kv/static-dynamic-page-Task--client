import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function ReviewView() {
    const { id } = useParams();
    const [Slider, setSlider] = useState([]
     );
    const token = localStorage.getItem('token');
  
  
    useEffect(() => {
      axios.get("http://localhost:4000/viewSlider", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res);
        setSlider(res.data);
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
            
            <th>image1</th>
            <th>slidername</th>
            <th>slidertitle</th>
           
            <th>slidercontent</th>
            
            <th>Edit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        
        <td><img src={Slider[0]?.sliderimg1} alt="logo1" class="simple-img" /></td>
        <td>{Slider[0]?.slidername}</td>
        <td>{Slider[0]?.slidertitle}</td>
       
        <td>{Slider[0]?.slidercontent}</td>
        
           
            <Link to={`/reviewsEdit/${Slider[0]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        
        <td><img src={Slider[1]?.sliderimg1} alt="logo1" class="simple-img" /></td>
        <td>{Slider[1]?.slidername}</td>
        <td>{Slider[1]?.slidertitle}</td>
       
        <td>{Slider[1]?.slidercontent}</td>
        
           
            <Link to={`/reviewsEdit/${Slider[1]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        
        <td><img src={Slider[2]?.sliderimg1} alt="logo1" class="simple-img" /></td>
        <td>{Slider[2]?.slidername}</td>
        <td>{Slider[2]?.slidertitle}</td>
       
        <td>{Slider[2]?.slidercontent}</td>
        
           
            <Link to={`/reviewsEdit/${Slider[2]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
        <tr>
        
        <td><img src={Slider[3]?.sliderimg1} alt="logo1" class="simple-img" /></td>
        <td>{Slider[3]?.slidername}</td>
        <td>{Slider[3]?.slidertitle}</td>
       
        <td>{Slider[3]?.slidercontent}</td>
        
           
            <Link to={`/reviewsEdit/${Slider[3]?._id}`}><td><button class="edit-button">Edit</button></td></Link>
        </tr>
     
    </tbody>
</table>
</div>

</div>
  )
}

export default ReviewView