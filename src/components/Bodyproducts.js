

import {useNavigate} from "react-router-dom";



const Bodyproducts=()=>{

    const navigate = useNavigate();
   
    const handleclick=(prop)=>{
     

        navigate("/Productframe", { state: {name:prop} });
          
    }
   

    return(
        <div className="Body_products">
            <div className="Bproducts_list_wrapper">
                <div className="Bproducts_list">
                <div className="Body_products_content_wrapper">
            <div className="Body_products_content"  id="Bproduct_content_1">
              
                <div className="Bproducts_image_wrapper">
                    <img src="./pictures/soap-1.png" alt="soap" />
                </div>
                <div className="Bproducts_details">
                    <h2>BproductName</h2>
                    <p>Bproducts_description</p>
                    <pre>Price</pre>
                </div>
                <div className="Bproducts_buttons">
               <button className="buy" onClick={()=>handleclick('soap')} >BUY</button>
                    <button>CART</button>
                </div>
                </div>
                <div className="Body_products_content "id="Bproducts_content_2">
                <div className="Bproducts_image_wrapper">
                <img src="./pictures/oil-1.png" alt="oil" />
                </div>
                <div className="Bproducts_details">
                    <h2>BproductName</h2>
                    <p>Bproducts_description</p>
                    <pre>Price</pre>
                </div>
                <div className="Bproducts_buttons">
                <button className="buy" onClick={()=>handleclick('oil')} >BUY</button>
                    <button>CART</button>
                </div>
        </div>
        <div className="Body_products_content "id="Bproducts_content_3">
                <div className="Bproducts_image_wrapper">
                <img src="./pictures/bodywash-1.png" alt="bodywash" />
                </div>
                <div className="Bproducts_details">
                    <h2>BproductName</h2>
                    <p>Bproducts_description</p>
                    <pre>Price</pre>
                </div>
                <div className="Bproducts_buttons">
                    <button>BUY</button>
                    <button>CART</button>
                </div>
                </div>
                <div className="Body_products_content "id="Bproducts_content_4">
                <div className="Bproducts_image_wrapper">
                <img src="./pictures/bodyscrub-1.png" alt="bodyscrub" />
                </div>
                <div className="Bproducts_details">
                    <h2>BproductName</h2>
                    <p>Bproducts_description</p>
                    <pre>Price</pre>
                </div>
                <div className="Bproducts_buttons">
                    <button>BUY</button>
                    <button>CART</button>
                </div>
                </div>
            </div></div>
            </div>
        </div>
    )
}
export default Bodyproducts;