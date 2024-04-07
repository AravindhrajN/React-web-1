import {useLocation} from 'react-router-dom'

const Ordersummary=()=>{

    const location = useLocation();
    const data = location.state;
    console.log(data);
    console.log(data.name);

return(

  <div className="container">
    <div className="row">
        <h2>hello</h2>
    </div>
  </div>


)



}


export default Ordersummary;