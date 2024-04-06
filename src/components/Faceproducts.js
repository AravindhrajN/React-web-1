import { useState,useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";



const Faceproducts=({style ,style1})=>{

    const[List,setList]=useState([]);
    const navigate = useNavigate();
   
    const handleclick=(prop)=>{
     

        navigate("/Productframe", { state: {id:prop} });
          
    }

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("https://wbp.onrender.com/api/fproduct");
            setList(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
},[])
    return(
        <div className="Face_products" >
            <div className="Face_products_list_wrapper">
            <div className="Face_products_list " style={ style1 }>
            <div className="Face_products_contents_wrapper" style={ style }>
            { List.map(item=>(
                <div  className="Face_products_contents"  id={item.id}>
               

                          <div className="Fproducts_image_wrapper">
                          <img src="./pictures/newarrival-1.png" alt='cleanser' />
                      </div>
                      <div className="Fproducts_details">
                          <h2>{item.name}</h2>
                          <p>{item.des}</p>
                          <pre>{item.price}</pre>
                      </div>
                      <div className="Fproducts_buttons">
      <button className="buy" onClick={()=>handleclick(item.id)}  >BUY</button>
                          <button>CART</button>
                      </div>

                </div>
               
               ))
              
            }
                <div  className="Face_products_contents" id="Face_products_content_2">
                <div className="Fproducts_image_wrapper">
                <img src="./pictures/Moisturizer-1.png" alt='Moisturizer' />
                </div>
                <div className="Fproducts_details">
                    <h2>FproductName</h2>
                    <p>Fproducts_description</p>
                    <pre>Price</pre>
                </div>
                <div className="Fproducts_buttons">
                    <button>BUY</button>
                    <button>CART</button>
                </div>
                </div>
                <div className="Face_products_contents" id="Face_products_content_3">
                <div className="Fproducts_image_wrapper">
                <img src="./pictures/faceserum.png" alt='faceserum' />
                </div>
                <div className="Fproducts_details">
                    <h2>FproductName</h2>
                    <p>Fproducts_description</p>
                    <pre>Price</pre>
                </div>
                <div className="Fproducts_buttons">
                    <button>BUY</button>
                    <button>CART</button>
                </div>
                </div>
                <div className="Face_products_contents" id="Face_products_content_4">
                <div className="Fproducts_image_wrapper">
                <img src="./pictures/tone-1.png" alt='toner' />
                </div>
                <div className="Fproducts_details">
                    <h2>FproductName</h2>
                    <p>Fproducts_description</p>
                    <pre>Price</pre>
                </div>
                <div className="Fproducts_buttons">
                    <button>BUY</button>
                    <button>CART</button>
                </div>
                </div>
                <div className="Face_products_contents" id="Face_products_content_5">
                <div className="Fproducts_image_wrapper">
                <img src="./pictures/Sunscreen-1.png" alt='Sunscreen' />
                </div>
                <div className="Fproducts_details">
                    <h2>FproductName</h2>
                    <p>Fproducts_description</p>
                    <pre>Price</pre>
                </div>
                <div className="Fproducts_buttons">
                    <button>BUY</button>
                    <button>CART</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Faceproducts;