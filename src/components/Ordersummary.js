import {useLocation} from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from'axios';

const Ordersummary=()=>{
  const[List,setList]=useState([]);
    const location = useLocation();
    const data = location.state;
    useEffect(() => {
      const params = {
        id: data.id,
        product:data.product
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

    console.log(List.name+"name");
return(

  <div className="container">
    <div className="row" >
        <div className="col-6 col-sm-12 username"><p>{data.name}</p></div>
        <div className="col-6 col-sm-12 u_mobile"><p>{data.mobile}</p></div>
        <div className="col-6 col-sm-12 u_city"><p>{data.city}</p></div>
        <div className="col-6 col-sm-12 u_state"><p>{data.state}</p></div>
        <div className="col-6 col-sm-12 u_pincode"><p>{data.pincode}</p></div>
        <div className="col-12 address"><p>{data.address}</p></div>
    </div>
    <div className="row">
      <div className="col-6"></div>
      <div className="col-6">
      <div className="col-12"></div>
      <div className="col-12"></div>
      <div className="col-12"></div>

      </div>
    </div>
  </div>


)



}


export default Ordersummary;