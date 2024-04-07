
//import axios from 'axios';
import {useLocation} from "react-router-dom";



const Order=()=>{
 
    const location = useLocation();
    const order = location.state;
  console.log(order);

  //*useEffect(()=>{
     //   const fetchData= async()=>{
          
      //      const response=await axios.get("https://wbp.onrender.com/api/showorder")
   //               setorder(response.data);
    //    }
     //   fetchData();
 //  },[])//




    return(
        <>
          <div className="orderwrapper">
                   <div className="container">
                    <div className="row">
                      { order.map(item=>( <><div className="col">Reference_ID:{item.ref_id}</div>
                        <div className="col">Order_ID:{item.order_id}</div>
                        <div className="col"><h4>Your Order Done!</h4>

<p>Your order for the product is done and don't share your Order_ID to anyone (  to call  customerservice and share only last fourdigit  ,when you have query on the product) further details we send the sms that contains the track_Your_order link .</p><p>Using the link you can track the product's shipping details.
Thank you for  choosing our product! Have a Good Day.</p></div></>))}
                    </div>
                   </div>
          </div>
        </>
    )

}
export default Order;