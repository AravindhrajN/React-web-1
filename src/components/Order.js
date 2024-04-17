
//import axios from 'axios';
import {useLocation} from "react-router-dom";
import Footer from "./AppFooter";

const Order=()=>{
 
    const location = useLocation();
    const orders = location.state;


  //*useEffect(()=>{
     //   const fetchData= async()=>{
          
      //      const response=await axios.get("https://wbp.onrender.com/api/showorder")
   //               setorder(response.data);
    //    }
     //   fetchData();
 //  },[])//








    return(
        <>
          <div className="orderwrapper bg-success " >
                   <div className="container-sm   " >
                    <div className="row p-3 ">
                        <div className="col  styleorder " >
                            <div className="refid p-2" >Reference_ID: {orders[0]}</div>
                            <div className="orderid p-2 mb-3" >Order_ID: {orders[1]}</div>

                            
                                <h4  >Your Order Done!</h4>
                               <div className="para" style={{padding:"3%",lineHeight:'2'}} >Your order for the product is done and don't share your Order_ID to anyone <i>to call customerservice and share only last fourdigit, when you have query on the product</i> further details we send the sms that contains the track_Your_order link
                               Using the link you can track the product's shipping details. Thank you for choosing our product! Have a Good Day.</div>
                               </div>
                        </div>
                   </div>
          </div>
          <Footer/>
        </>
    )

}
export default Order;