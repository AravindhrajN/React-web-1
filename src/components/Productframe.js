import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from 'axios';


const Productframe=()=>{

  const location = useLocation();
  const data = location.state;
  const[List,setList]=useState([]);
 
  
 

useEffect(() => {
  const params = {
    id: data.id,
    product:data.name
  };
    const fetchData = async () => {
     
        try {
         
            const response = await axios.get("https://wbp.onrender.com/api/getproduct", { params });
            setList(response.data);
            
           
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
},[data])



    return(
   <>
 <div className="frame base">
    <div className="container m-3 border border-2 border-danger">
    {List.map(item => ( <div className="row">
        <div className="col border border-2 border-primary ">
        <figure className="figure p-3">
  <img src="https://wbp.onrender.com/api/getimage" className="figure-img img-fluid rounded" alt="moisture" id={item.id}/>
  <figcaption className="figure-caption">{item.name}</figcaption>
</figure>
<p>{item.price}</p>

        </div>
        <div className="col border border-2 border-success ">
            <p>{item.des} </p>
            <div className="applytype">
                <h4>HOW TO APPLY</h4>
                <p>By adding gutter modifier classes, you can have control over the gutter width in as well the inline as block direction. Also requires the $enable-grid-classes Sass variable to be enabled (on by default).</p>
            </div>
           
        </div>
      </div>))}
   
      <div className="row  bg-success">
  
      <h2>Form Validation Example</h2>
  <form id="myForm">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>
      <div className="error-message" id="name-error"></div>
    </div>
    <div>
      <label for="mobile">Mobile Number:</label>
      <input type="text" id="mobile" name="mobile" required pattern="[0-9]{10}"/>
      <div className="error-message" id="mobile-error"></div>
    </div>
    <div>
      <label for="street-door">Street & Door:</label>
      <input type="text" id="street-door" name="street-door" required/>
      <div className="error-message" id="street-door-error"></div>
    </div>
    <div>
      <label for="city">City:</label>
      <input type="text" id="city" name="city" required/>
      <div className="error-message" id="city-error"></div>
    </div>
    <div>
      <label for="state">State:</label>
      <input type="text" id="state" name="state" required/>
      <div className="error-message" id="state-error"></div>
    </div>
    <div>
      <label for="pincode">Pincode:</label>
      <input type="text" id="pincode" name="pincode" required pattern="[0-9]{6}"/>
      <div className="error-message" id="pincode-error"></div>
    </div>
    <button type="submit">Submit</button>
  </form>


  </div>
  <div className="row payment p-3">
    <div className="col p-3 text-center"><Link to="/order" ><button className="cash on pay" >CASH ON PAY</button></Link></div>
    <div className="col p-3 text-center"><button>ONLINE MODE</button></div>
    
  </div>
 
      </div>
    </div>
 
 

   </>
    )
    
}

export default Productframe;