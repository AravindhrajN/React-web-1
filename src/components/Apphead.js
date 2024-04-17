import { Link } from "react-router-dom";




 const Apphead=({bg})=>{

  
  return(
 
  <div className="navbarcss container-fluid " style={bg}>
    <nav className="navbar  navbar-expand-md navbar-light  p-2 " >
    <div className="container-fluid g-0 firstcont">
    <Link to="/"  style={{textDecorationLine:"none"}}> <button className="navbar-brand  ms-2   col-md-auto  " >
      <svg width="200" height="90" viewBox="0 0 208.4 105.19222493960693" class="looka-1j8o68f"><defs id="SvgjsDefs4761"></defs><g id="SvgjsG4762" featurekey="5TMTKC-0" transform="matrix(1.1688213249491288,0,0,1.1688213249491288,-13.103553841125045,-6.151540086829706)" fill="#c8e7ed"><path xmlns="http://www.w3.org/2000/svg" fill="#c8e7ed" d="M72.798,11.102C59.87,2.427,51.342,5.973,42.609,6.018c-0.092,0.403-0.076,0.332-0.167,0.737  c3.368,1.606,12.69,4.255,14.123,12.369c-0.368-2.59-12.964-14.037-23.083-11.744C23.364,9.671,16.356,18.763,13.214,29.262  c-3.48,9.139-2.167,18.041,1.947,26.652c2.488,5.208,6.215,9.706,10.593,13.449c3.11,2.659,5.594,5.532,3.914,9.814  c3.859-1.835,7.445-8.547,6.744-12.268c-0.079-0.417-0.109-0.799-0.611-0.963c-1.691-0.555-1.764-2.034-2.061-3.419  c-0.306-1.423-0.089-3.311-1.725-3.92c-2.293-0.855-3.178-3.118-4.142-4.641c-1.593-2.519-2.998-4.06-6.151-3.471  c1.14-3.211,2.401-6.145,2.326-9.375c-0.019-0.828,0.341-1.931-1.035-2.187l0.028-0.042c-0.017-0.02-0.032-0.028-0.048-0.044  c0.006,0.028,0.013,0.055,0.019,0.083c-0.286,0.398-0.38-0.444-0.019-0.083c-0.437-1.955-1.021-3.893-1.271-5.87  c-0.817-6.483,1.229-11.995,6.295-17.043c0.058,2.057-0.333,3.485-0.138,4.975c0.715,5.439,3.879,9.662,7.019,13.87  c3.687,4.941,8.069,9.383,11.09,14.804c4.23,10.394-1.185,17.084-9.694,22.846c5.098-0.006,9.032-1.694,12.733-4.179  c-5.197,8.484-22.015,24.231-32.47,
      24.246c6.485,2.999,12.537,2.462,18.802,2.723c13.497,0.561,26.352-4.489,36.439-11.291  c6.649-4.485,15.498-17.383,16.27-31.364C88.84,38.582,86.875,20.55,72.798,11.102z"></path></g><g id="SvgjsG4763" featurekey="nameLeftFeature-0" transform="matrix(2.5714283962639133,0,0,2.5714283962639133,103.57142900934022,20.857146272853697)" fill="#ffffc2"><path d="M7.64 16.66 l-4.14 -7.42 l0 10.26 l-1 0 l0 -14 l6.3 11.16 l-1.16 0 z M14 19.5 l-1 0 l0 -10.26 l-3.9 6.9 l-6 -10.64 l1.14 0 l4.86 8.66 l4.9 -8.66 l0 14 z M12.26 5.5 l1.14 0 l-4.3 7.6 l-0.56 -0.94 z M5 19.5 l-1 0 l0 -8.34 l1 1.74 l0 6.6 z M11.5 19.5 l0 -6.6 l1 -1.74 l0 8.34 l-1 0 z"></path></g><g id="SvgjsG4764" featurekey="nameRightFeature-0" transform="matrix(2.4,0,0,2.4,147.2,23)" fill="#ffffc2"><path d="M10.64 11.46 c0.86 0.84 1.36 2.04 1.36 3.54 c0 3 -2 5 -5 5 l-5 0 l0 -15 l4.5 0 c2.7 0 4.5 1.8 4.5 4.5 c0 0.7 -0.16 1.36 -0.36 1.96 z M7 18 c1.8 0 3 -1.2 3 -3 s-1.2 -3 -3 -3 l-2.66 0 l1.06 1 l1.6 0 c1.2 0 2 0.8 2 2 s-0.8 2 -2 2 l-3.5 0 l0 -5.5 l3.5 0 c2.1 0 3.5 1.4 3.5 3.5 c0 0.96 -0.3 1.74 -0.8 2.34 l0.76 0.72 c0.64 -0.76 1.04 -1.8 1.04 -3.06 c0 -2.1 -1.04 -3.66 -2.8 -4.2 c0.1 -0.14 0.14 -0.3 0.2 -0.5 c0.06 -0.24 0.1 -0.5 0.1 -0.8 c0 -1.5 -1 -2.5 -2.5 -2.5 l-2.16 0 l1.06 1 l1.1 0 c0.9 0 1.5 0.6 1.5 1.5 c0 0.4 -0.16 0.8 -0.36 1.06 c-0.34 -0.06 -0.64 -0.06 -0.64 -0.06 l-3.5 0 l0 -4 l3 0 c1.8 0 3 1.2 3 3 c0 0.4 -0.06 0.76 -0.16 1.06 c0.36 0.14 0.6 0.34 0.9 0.54 c0.16 -0.5 0.26 -1.04 0.26 -1.6 c0 -2.4 -1.6 -4 -4 -4 l-4 0 l0 12.5 l4.5 0 z M5 8.34 l-1 -0.98 l0 2.64 l1 0 l0 -1.66 z M7.4 10 c0.06 -0.16 0.1 -0.3 0.1 -0.5 c0 -0.6 -0.4 -1 -1 -1 l-1 0 l0 1.5 l1.9 0 z M4 16.5 l1 0 l0 -3.14 l-1 -1 l0 4.14 z M7 16.5 c0.9 0 1.5 -0.6 1.5 -1.5 s-0.6 -1.5 -1.5 -1.5 l-1.5 0 l0 3 l1.5 0 z M7 19.5 c1.24 0 2.3 -0.4 3.1 -1.04 l-0.76 -0.76 c-0.6 0.5 -1.4 0.8 -2.34 0.8 l-4.5 0 l0 1 l4.5 0 z M20.5 5 c3 0 5 2 5 5 s-2 5 -5 5 l-1.5 0 l0 5 l-3.5 0 l0 -15 l5 0 z M20.5 13 c1.8 0 3 -1.2 3 -3 s-1.2 -3 -3 -3 l-2.66 0 l1.06 1 l1.6 0 c1.2 0 2 0.8 2 2 s-0.8 2 -2 2 l-3.5 0 l0 -5.5 l3.5 0 c2.1 0 3.5 1.4 3.5 3.5 c0 0.96 -0.3 1.76 -0.8 2.36 l0.76 0.7 c0.64 -0.76 1.04 -1.8 1.04 -3.06 c0 -2.7 -1.8 -4.5 -4.5 -4.5 l-4.5 0 l0 14 l1 0 l0 -6.5 l3.5 0 z M17.5 11.5 l1 0 l0 -3.16 l-1 -0.98 l0 4.14 z M20.5 11.5 c0.9 0 1.5 -0.6 1.5 -1.5 s-0.6 -1.5 -1.5 -1.5 l-1.5 0 l0 3 l1.5 0 z M20.5 14.5 c1.24 0 2.3 -0.4 3.1 -1.06 l-0.76 -0.74 c-0.6 0.5 -1.4 0.8 -2.34 0.8 l-2.66 0 l1.06 1 l1.6 0 z M18.5 19.5 l0 -4.64 l-1 -1 l0 5.64 l1 0 z"></path></g></svg>
      </button></Link>
     
      <div className="  col-md-auto" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ flexWrap:' wrap', alignItems: 'stretch',alignContent: 'space-around'}}>
          <li className="nav-item    m-3 me-4 ms-4 ">
          <Link to="/"  style={{textDecorationLine:"none"}}> <button className="nav-link p-3 " aria-current="page" >Home</button></Link>
          </li>
       
          <li className="nav-item    m-3 me-4 ms-4  dropdown">
            <button className="nav-link p-3 dropdown-toggle"  id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </button>
            <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
              <li> <Link to="/facepro" target="a_blank" style={{textDecorationLine:"none"}}><button className="dropdown-item " >Face products</button></Link></li>
              <li><Link to="/bodypro" target="a_blank" style={{textDecorationLine:"none"}}><button className="dropdown-item " >Body products</button></Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link to="/products" target="a_blank" style={{textDecorationLine:"none"}}><button className="dropdown-item" > Products</button></Link></li>
            </ul>
          </li>
          <li className="nav-item    m-3 me-4 ms-4 ">
          <Link to="/care_tips" target="a_blank"style={{textDecorationLine:"none"}}><button className="nav-link p-3 " >Care&Tips</button></Link>
          </li>
      
        </ul>
       
      </div>
      <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Face serum..." aria-label="Search" />
          <button className="btn btn-outline-light text-black bg-white p-2" type="submit">Search</button>
        </form>
    </div>
  </nav>
  </div>
   
   
  )
}

export default Apphead;