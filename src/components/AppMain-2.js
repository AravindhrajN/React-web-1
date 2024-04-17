import { useState } from "react"





 
const Newarrival= () =>{
    return(<>
    <img src="./pictures/newarrival-1.png"
      alt="hairserum"
      style={{width: '50%',margin:'2% 25%'
    }}
    />
  <p className="text-white">Face serum</p></>);
   
};
const Bestselling= () =>{
    return(<>
    <img src="./pictures/bestsell-1.png"
      alt="bodycream"
      style={{width: '90%',borderRadius:'50%'
    }} />
    <p className="text-white"> Body cream</p>
    </>
   );
   
};





const Main2=()=>{

    const[clicked,setclicked]=useState(false);
    const handleButtonClick=(value)=>{
        setclicked(value);
   }

return(<>
<div className="main2">
    <h2>Explore our products</h2>
    <div className="content-2">
    <div className="button-wrapper-2 row ">
       <div className="row"> <button className="Newarrival   " onClick={()=>{handleButtonClick(false)}} >New Arrival</button>
        <button className="Bestselling  " onClick={()=>{handleButtonClick(true)}} >Best Selling</button></div>
    </div>
    <div className="main2-subcontent-2">
      <div className="main2-l-img">
        <img src="./pictures/main2-l-img.png" alt="l-img"/>
      </div>
    <div className='img-wrapper'>
      <div className="img-contain">
    {clicked ? <Bestselling /> : <Newarrival />}
    </div>
    </div>
    <div className="main2-r-img">
    <img src="./pictures/main2-r-img.png" alt="r-img"/>
    </div>
    </div>
    </div>

</div>
</>)
}
export default Main2;