
import { useState,useEffect } from "react";
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';


const displayform=()=>{
  document.getElementById("id").style.display="flex";
   window.alert("Plz enter details below");
}


const Productframe=({addcart})=>{

  const [data,setdata]=useState([]); 

  const[List,setList]=useState([]);
  const[user,setuser]=useState([]);
  const [submitForm, setSubmitForm] = useState(false);
  const navigate = useNavigate();


  const addtocart=(item)=>{
    addcart(item);
    navigate("/cart");
  }

  useEffect(() => {
    const stateData = JSON.parse(localStorage.getItem('Data'));
    console.log(stateData); 
    setdata(stateData);
}, []);
 

useEffect(() => {
  const params = {
    id: data.id,
    product:data.name
  };
    const fetchData = async () => {
     
        try {
         
            const response = await axios.get("https://wbp.onrender.com/api/getproduct", { params });
            const updatedData = response.data.map(item => ({ ...item, prodata: data.name }));
            setList(updatedData);
            
           
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
},[data])

useEffect(() => {
  if (submitForm) {
    navigate("/Ordersummary", { state: {user,List,data} });
    setSubmitForm(false); 
  }
}, [submitForm, user, navigate,List,data]);



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
  setuser({ name, mobile, state, city, pincode, address});
  setSubmitForm(true);
   
  
}

    return(
   <>
  
 <div className="frame">
    <div className="container-fulid m-3  framebase">
    {List.map(item => ( <div className="row proframe" key={item.id}>
        <div className=" col col-md-auto fig-1" >
        <figure className="figure p-3" >
  <img src={"https://wbp.onrender.com/api/getimage/"+item.id+"/"+data.name} className="figure-img img-fluid rounded" alt="moisture" id={item.id} />
 
</figure>


        </div>
        <div className=" col col-md-6 figdetails  ">
          <h1>{item.name}</h1>
        <p className='price'>Price: ₹{item.price}</p>
            <p>{item.des} </p>
            <div className="applytype">
                <h3>HOW TO APPLY</h3>
                <p>1) Face_products: Take sufficient quantity of product and massage into face and neck until it is fully absorbed.<br/>2) Body_products: Take sufficient quantity of product and apply on body.and more to know <Link to="/care_tips" target="_balnk">Click Care&Tips </Link></p>
                <div className="purchasedetails"><button className=' m-2' onClick={()=>displayform()}>Purchase</button>
                <button className=' m-2' onClick={()=>addtocart(item) }  target="_ablank">Cart</button></div>
            </div>
           
        </div>
      </div>))}
   
      <div className="row form" id="id" style={{display:"none"}}>
      <h3 className='formhead'>Enter Yours Details</h3>
      <form onSubmit={validateForm} className=' col formdetails'>
  
  <div>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />

  </div>
  <div>
    <label htmlFor="mobile">Mobile No:</label>
    <input type="text" id="mobile" name="phone" required pattern="[0-9]{10}" />
 
  </div>
  <div>
    <label htmlFor="city">City:</label>
    <input type="text" id="city" name="city" required />
  
  </div>
  <div>
    <label htmlFor="state">State:</label>
    <input type="text" id="state" name="state" required />
 
  </div>
  <div>
    <label htmlFor="pincode">Pincode:</label>
    <input type="text" id="pincode" name="pincode" required pattern="[0-9]{6}" />
   
  </div>
  <div>
    <label htmlFor="Address">Address:</label>
    <textarea id="Address" name="Address" rows={5} cols={30} required></textarea>
 
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