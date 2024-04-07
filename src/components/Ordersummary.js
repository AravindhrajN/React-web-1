import {useLocation} from 'react-router-dom';

const Ordersummary=()=>{

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const data2 = {}; // Initialize with default values or an empty object
  
    // Extract state data from query parameters
    for (const [key, value] of searchParams.entries()) {
      data2[key] = value;
    }

    console.log(data2.name);

return(

  <div className="container">
    <div className="row">
        <h2>hello</h2>
    </div>
  </div>


)



}


export default Ordersummary;