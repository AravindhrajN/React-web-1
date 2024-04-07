import { useState } from 'react';
import { useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios';


const Ordersummary=()=>{
  
    const location = useLocation();
    const {user,List} = location.state;
    const[Quant,setQuant]=useState(0);
    const navigate = useNavigate();
    const [order,setorder]=useState();

const quant=(prop)=>{
    
       if(Quant>=10){
        window.alert("maxout the product sales per customer and plz contact our support for max product");
       }else  if(Quant<=0){
        window.alert("minout the product sales per customer");
       }else{
        
        setQuant(prevQuant => prevQuant + prop);
       }
}

  const submitdata=(prop,prop2)=>{

    const params = {
      id: prop,
      userdata:user,
      mode:prop2,
      quant:Quant

    };

    const fetchData = async () => {
     
      try {
       
        const response= await axios.post("https://wbp.onrender.com/api/savedata", { params });
         setorder(response.data);
         
          navigate("/order",{state: order});
         
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  fetchData();

  }

  
return(

  <div className="container-fulid">
    <div className="row" >
      <div className="col-6">
        <div className="col-6 col-sm-12 username"><p>{user.name}</p></div>
        <div className="col-6 col-sm-12 u_mobile"><p>{user.mobile}</p></div>
        <div className="col-6 col-sm-12 u_city"><p>{user.city}</p></div>
        <div className="col-6 col-sm-12 u_state"><p>{user.state}</p></div>
        <div className="col-6 col-sm-12 u_pincode"><p>{user.pincode}</p></div>
        <div className="col-12 address"><p>{user.address}</p></div>
    </div>
    </div>
    {List.map(item =>(<><div className="row">
      <div className="col-6"></div>
      <div className="col-6">
      <div className="col-12">{item.name}</div>
      <div className="col-12">{item.price}</div>
      <div className="col-12"><button onClick={quant(1)}>+</button>Quant<button onClick={quant(-1)}>-</button></div>

      </div>
    </div>
    <div className="row">
      <div className="col-6"><button onClick={submitdata(item.id,"cash")}>cash on pay</button></div>
      <div className="col-6"><button></button></div>
    </div></>
    ))}

  </div>


)



}


export default Ordersummary;