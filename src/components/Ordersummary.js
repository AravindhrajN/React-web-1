import {useLocation} from 'react-router-dom'

const Ordersummary=()=>{
  
    const location = useLocation();
    const {user,List} = location.state;
  

  
return(

  <div className="container">
    <div className="row" >
        <div className="col-6 col-sm-12 username"><p>{user.name}</p></div>
        <div className="col-6 col-sm-12 u_mobile"><p>{user.mobile}</p></div>
        <div className="col-6 col-sm-12 u_city"><p>{user.city}</p></div>
        <div className="col-6 col-sm-12 u_state"><p>{user.state}</p></div>
        <div className="col-6 col-sm-12 u_pincode"><p>{user.pincode}</p></div>
        <div className="col-12 address"><p>{user.address}</p></div>
    </div>
    <div className="row">
      <div className="col-6"></div>
      <div className="col-6">
      <div className="col-12">{List.name}</div>
      <div className="col-12"></div>
      <div className="col-12"></div>

      </div>
    </div>
  </div>


)



}


export default Ordersummary;