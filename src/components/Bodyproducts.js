import { useState,useEffect } from "react";
import axios from 'axios';
import Apphead from "./Apphead";
import Footer from "./AppFooter";


const Bodyproducts=({style,style1,addcart,dis})=>{
    const[List,setList]=useState([]);
   
    const handleclick=(prop)=>{
     
        const data1={id:prop,name:'body'}

        localStorage.setItem('Data', JSON.stringify(data1));

        window.open("/Productframe", '_blank');
          
    }
  
    const addtocart=(item)=>{
        addcart(item);
  }

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("https://wbp.onrender.com/api/bproduct");
            const updatedData = response.data.map(item => ({ ...item, prodata: 'body' }));
            setList(updatedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    if (List.length === 0) {
        fetchData();
    }
},[])
   

    return(
        <>

        <div className="Body_products">
        <div className="bodyhead" style={dis}><Apphead bg={{backgroundColor:"grey"}}/></div>
            <div className="Bproducts_list_wrapper">
                <div className="Bproducts_list" style={ style }>
                <div className="Body_products_content_wrapper" style={ style }>
                { List.map(item=>(
                <div  className="Body_products_content" style={ style1 }  id={item.id}>
                   
                         
                          <div className="cardimg">
                          <div className="Bproducts_image_wrapper">
                          
                          <img className="face" src={"https://wbp.onrender.com/api/getimage/"+item.id+"/body"} alt={item.name} id="back" />
                   
                      <div className="back">
                      <p>{item.des}</p>
                      </div>
                     
                </div>
                </div>
                      <div className="Fproducts_details" style={{width:"fit-content"}}>
                          <h2 style={{width:"fit-content"}}>{item.name}</h2>
                         
                          <pre style={{width:"fit-content"}}>₹{item.price}</pre>
                      </div>
                      <div className="Fproducts_buttons" style={{width:"fit-content"}}>
      <button className="buy" onClick={()=>handleclick(item.id)} target="_ablank" >BUY</button>
      <button  onClick={()=>addtocart(item)}>CART</button>
                      </div> </div>
                      
               
               ))
              
            }
          
            </div></div>
            </div>
        </div>
        <div className="bodyfoot" style={dis}><Footer/></div>

        </>
    )
}
export default Bodyproducts;