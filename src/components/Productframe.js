
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';




const Productframe=()=>{

  const location = useLocation();
  const data = location.state;
  const[List,setList]=useState([]);
  const[user,setuser]=useState([]);
  const navigate = useNavigate();


   

 
 

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

useEffect(() => {
  if (submitForm) {
    navigate("/Ordersummary", { state: user });
    setSubmitForm(false); // Reset the submitForm state after navigation
  }
}, [submitForm, user, navigate]);



const validateForm=(e)=> {
  e.preventDefault(); 

   
  const nameInput = document.querySelector('input[name="name"]');
  const mobileInput = document.querySelector('input[name="phone"]');
  const stateInput = document.querySelector('input[name="state"]');
  const cityInput = document.querySelector('input[name="city"]');
  const pincodeInput = document.querySelector('input[name="pincode"]');
  const addressInput = document.querySelector('textarea[name="Address"]');
const name=nameInput.value.trim() ;
const mobile=mobileInput.value.trim();
const state=stateInput.value.trim() ;
const city=cityInput.value.trim();
const pincode=pincodeInput.value.trim();
const address=addressInput.value.trim();





  const phoneRegex = /^[0-9]+$/;
  const pincodeRegex = /^[0-9]{6}$/;


  if (name=== "") {
    alert("Please enter your name.");
    nameInput.focus();
    return false;
  }

  if ( mobile=== "" || !phoneRegex.test(mobileInput.value)) {
    alert("Please enter a valid mobile number containing only numbers.");
    mobileInput.focus();
    return false;
  }

 

  if (state=== "") {
    alert("Please enter your state.");
    stateInput.focus();
    return false;
  }

  if (city === "") {
    alert("Please enter your city.");
    cityInput.focus();
    return false;
  }

  if (pincode === "" || !pincodeRegex.test(pincodeInput.value)) {
    alert("Please enter a valid pincode containing only 6 digits.");
    pincodeInput.focus();
    return false;
  }

  if (address === "") {
    alert("Please enter your address.");
    addressInput.focus();
    return false;
  }
  setuser({ name, mobile, state, city, pincode, address });
  setSubmitForm(true);
   
  
}

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


      <form onSubmit={validateForm} >
  <div>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <div className="error-message" id="name-error"></div>
  </div>
  <div>
    <label htmlFor="mobile">Mobile Number:</label>
    <input type="text" id="mobile" name="phone" required pattern="[0-9]{10}" />
    <div className="error-message" id="mobile-error"></div>
  </div>
  <div>
    <label htmlFor="city">City:</label>
    <input type="text" id="city" name="city" required />
    <div className="error-message" id="city-error"></div>
  </div>
  <div>
    <label htmlFor="state">State:</label>
    <input type="text" id="state" name="state" required />
    <div className="error-message" id="state-error"></div>
  </div>
  <div>
    <label htmlFor="pincode">Pincode:</label>
    <input type="text" id="pincode" name="pincode" required pattern="[0-9]{6}" />
    <div className="error-message" id="pincode-error"></div>
  </div>
  <div>
    <label htmlFor="Address">Address:</label>
    <textarea id="Address" name="Address" rows={3} cols={6} required></textarea>
    <div className="error-message" id="address-error"></div>
  </div>
  <button type="submit" >Submit</button>
</form>


  </div>
 
 
 
      </div>
    </div>
 
 

   </>
    )
    
}





export default Productframe;