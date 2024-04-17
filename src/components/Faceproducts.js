import { useState,useEffect } from "react";
import axios from 'axios';
import Apphead from "./Apphead";
import Footer from "./AppFooter";



const Faceproducts=({style ,style1,addcart,dis})=>{

    const[List,setList]=useState([]);
 
   
    const handleclick=(prop)=>{
     
        const data1={id:prop,name:'face'};
      
        localStorage.setItem('Data', JSON.stringify(data1));

        window.open("/Productframe", '_blank');
          
    }
    
    const addtocart=(item)=>{
          addcart(item);
    }

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("https://wbp.onrender.com/api/fproduct");
            const updatedData = response.data.map(item => ({ ...item, prodata: 'face' }));
            setList(updatedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    if (List.length === 0) {
        fetchData();
    }

},[List])
    return(<>

        <div className="Face_products" >
        <div className="facehead " style={dis}><Apphead bg={{backgroundColor:"grey"}}/></div> 
            <div className="Face_products_list_wrapper">
            <div className="Face_products_list " style={ style }>
            <div className="Face_products_contents_wrapper" style={ style }>
            { List.map(item=>(
                <div  className="Face_products_contents" style={ style1 }  id={item.id}>
                   
                         
                          <div className="cardimg">
                          <div className="Fproducts_image_wrapper">
                          
                          <img className="face" src={"https://wbp.onrender.com/api/getimage/"+item.id+"/face"} alt={item.name} id="face" />
                   
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
      <button className="buy" onClick={()=>handleclick(item.id)} target="_blank" >BUY</button>
                          <button  onClick={()=>addtocart(item)}>CART</button>
                      </div> </div>
                      
               
               ))
              
            }
               
            </div>
            </div>
            </div>
        </div>
        <div className="facefoot" style={dis}><Footer/></div>
        </>
    )
}

export default Faceproducts;