


import { useState,useEffect } from 'react';
import { FormControl, InputGroup, } from 'react-bootstrap';




 const Head=(props)=>{

 const[displayfunction,setdisplayFunction]=useState(true)
  const handleButtonClick=(value)=>{
    setdisplayFunction(value)
  }
  
  useEffect(() => {

    props.DisplayFunction(displayfunction);
  }, [displayfunction, props]);

  return(
  <div className='nav' >
  
     <h1 >MyShop</h1>
   
    <InputGroup  className='InputGroup'>
    <button className='Products' onClick={()=> handleButtonClick(false)}> Products</button>
    <button className='Home' onClick={()=> handleButtonClick(true)}>Home </button>

     <button className='Tips' > Tips & Care</button>  
    </InputGroup>
    <FormControl className='formcontrol' 
     placeholder='Search-your-product'
   />
   
    </div>
  )
}

export default Head;