import { Link } from "react-router-dom";




 const Apphead=()=>{

  const handlenav=(event)=>{
    console.log("event"+event);
    switch(event){
      case "Home":
        return  <Link to="/" />;
      case "products":return  <Link to="/products" />;
      case "facepro":
        console.log("Matching case: Home");
        return  <Link to="/facepro" />;
      case "bodypro":return  <Link to="/bodypro" />;
      default:
      console.error("Invalid event:", event);
      return null; 
    }
         
  }
  return(
 
  
    <nav className="navbar navbar-expand-md navbar-light bg-danger p-3 " >
    <div className="container-fluid  firstcont">
      <button className="navbar-brand p-1 ms-2   col-md-auto" onClick={()=>handlenav("Home")}>Navbar</button>
     
      <div className="  col-md-auto" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ flexWrap:' wrap', alignItems: 'stretch',alignContent: 'space-around'}}>
          <li className="nav-item    bg-primary m-3 me-4 ms-4 border border-3 border-danger rounded-3">
            <button className="nav-link p-3 active" aria-current="page" onClick={()=>handlenav("Home")}>Home</button>
          </li>
       
          <li className="nav-item   bg-primary  m-3 me-4 ms-4 border border-3 border-danger rounded-3 dropdown">
            <button className="nav-link p-3 dropdown-toggle" onClick={()=>handlenav("products")} id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li> <Link to="/facepro" target="a_blank"><button className="dropdown-item" >Action</button></Link></li>
              <li><button className="dropdown-item" onClick={()=>handlenav("bodypro")}>Another action</button></li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item" onClick={()=>handlenav("products")}>Something else here</button></li>
            </ul>
          </li>
          <li className="nav-item   bg-primary  m-3 me-4 ms-4 border border-3 border-danger rounded-3">
            <button className="nav-link p-3   " onClick={()=>handlenav("care&tips")}>Care&Tips</button>
          </li>
      
        </ul>
       
      </div>
      <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success p-2" type="submit">Search</button>
        </form>
    </div>
  </nav>
  
   
   
  )
}

export default Apphead;