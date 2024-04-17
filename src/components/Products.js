import { useState } from "react"
import Faceproducts from "./Faceproducts"
import Bodyproducts from "./Bodyproducts";
import Footer from "./AppFooter";
import Apphead from "./Apphead";
const Products=()=>{

const[clicked,setclicked]=useState(true);
const [Style1, setStyle1] = useState({ backgroundColor: 'white' });
const [Style2, setStyle2] = useState({ backgroundColor: ' bisque' });

 


const HandleClicked=(value)=>{
     setclicked(value);
     
}

 
    const changesytle1 = () => {
        setStyle1({ backgroundColor: 'white' })
        setStyle2({ backgroundColor: ' bisque' })

    }
    const changeStyle2 = () => {
      
      setStyle2({ backgroundColor: 'white' })
      setStyle1({ backgroundColor: ' bisque' })
       
    }
  
    return(
        <><Apphead/>
        <div className='Probg'><div className="Product-wrapper">
        <div className="prohead-container"> <div className="row">
            <div className="col-6">
        <button style={Style1}  onClick={()=>{HandleClicked(true);changesytle1(); } } >Face </button>
            </div>
            <div className="col-6" >
            <button style={Style2}  onClick={()=>{HandleClicked(false);changeStyle2();}}>Body </button>
            </div>
         </div></div><div className="Products-list-wrapper">
               {clicked?<Faceproducts dis={{display:"none"}}/>:<Bodyproducts dis={{display:"none"}}/>}
         </div>
         </div>
         </div>
       <Footer/>
        </>
    )
}


export default Products;