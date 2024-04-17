import { useState } from 'react';
import { useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios';
import Footer from './AppFooter';

const Ordersummary=()=>{
  
    const location = useLocation();
    const {user,List,data} = location.state;
    const[Quant,setQuant]=useState(1);
    const navigate = useNavigate();
    

const quant=(prop)=>{
    
       if(prop===1 &&Quant>=10){
        window.alert("maxout the product to sales per customer and plz contact our support for max product");
       }else  if(prop===-1 && Quant<=1){
        window.alert("minmum product reached to sales per customer");
       }else{
        
        setQuant(prevQuant => prevQuant + prop);
       }
}

  const submitdata=async (prop,prop2)=>{


   
     
      try {
       
        const response= await axios.post("https://wbp.onrender.com/api/savedata",   {
          id: prop,
          userdata: user,
          mode: prop2,
          quant: Quant
      } );
        
         navigate("/order", { state: response.data });

    }
         
       catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  


  

  
return(
<>
  <div className="container-fulid  contwrap ">
 

  


<div className="col col-sm-6 " style={{ backgroundColor: "rgb(234, 236, 129)"}}>
<h2 className='headorder' >Order_</h2>
  {List.map(item =>( <><div className="row content g-0 " key={item.id}> 

      <div className="col fig " > <figure className="figure p-1" >
  <img src={"https://wbp.onrender.com/api/getimage/"+item.id+"/"+data.name} className="figure-img img-fluid rounded" alt="moisture" id={item.id} name={item.name} />

</figure></div>
<div className="col p-1">
      <div className="col procont   ">
      <div className="col"><h2>{item.name}</h2></div>
      <div className="col price">₹{item.price}</div>
   <div className="col quant"> <p>Quantity:</p> <div className="p-2"><button onClick={()=>{quant(1)}}>+</button><p>{Quant}</p><button onClick={()=>{quant(-1)}}>-</button></div>

   </div> 
    </div>
    </div>
  </div>
  <div className="row  payment m-2 " >

  <button onClick={()=>{submitdata(item.id,"cash")}}>cash on pay</button>
<button>Pay Online</button>
</div></>
    ))}
  </div>
  <div className="col col-sm-6  " style={{ backgroundColor: "#f2b696bd"}}>
<h2 className='headsummary'>_Summary</h2>
  <div className="row g-0 ">
<div className="col add">
  <div className="row  g-0  addwrap"  >
      <h2>Customer_Details</h2>
      <div className="col  userdata" >
    
      <div className='col text' >{user.name}</div>
        <div className="col text">{user.mobile}</div>
       
    </div>
    <div className="col  userdata" >
   
      <div className="col text">{user.city}</div>
      <div className="col text"> {user.state}</div>
      <div className="col text">{user.pincode}</div>
  
  </div>
  <div className="col  userdata" >
    
   <div className="col text border-0">{user.address}</div>
</div>
    </div>
  </div>
  </div>
  </div>
  </div>
  <Footer />
</>

)



}


export default Ordersummary;