


 const Head=()=>{

 
  return(
 
  
    <nav className="navbar navbar-expand-md navbar-light bg-danger p-3 " >
    <div className="container-fluid  firstcont">
      <a className="navbar-brand p-1 ms-2   col-md-auto" href="ww.googgle.com">Navbar</a>
     
      <div className="  col-md-auto" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ flexWrap:' wrap', alignItems: 'stretch',alignContent: 'space-around'}}>
          <li className="nav-item    bg-primary m-3 me-4 ms-4 border border-3 border-danger rounded-3">
            <a className="nav-link p-3 active" aria-current="page" href="ww.googgle.com">Home</a>
          </li>
       
          <li className="nav-item   bg-primary  m-3 me-4 ms-4 border border-3 border-danger rounded-3 dropdown">
            <a className="nav-link p-3 dropdown-toggle" href="ww.googgle.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="ww.googgle.com">Action</a></li>
              <li><a className="dropdown-item" href="ww.googgle.com">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="ww.googgle.com">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item   bg-primary  m-3 me-4 ms-4 border border-3 border-danger rounded-3">
            <a className="nav-link p-3   " href="ww.googgle.com">Care&Tips</a>
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

export default Head;