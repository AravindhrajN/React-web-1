


import { useState,useEffect } from 'react';



 const Head=(props)=>{

 const[displayfunction,setdisplayFunction]=useState(true)
  const handleButtonClick=(value)=>{
    setdisplayFunction(value)
  }
  
  useEffect(() => {

    props.DisplayFunction(displayfunction);
  }, [displayfunction, props]);

  return(
  <header className='header' >
  
     <h1 >MyShop</h1>
   
    <nav className='nav'>
    <button className='Products' onClick={()=> handleButtonClick(false)}> Products</button>
    <button className='Home' onClick={()=> handleButtonClick(true)}>Home </button>

     <button className='Tips' > Tips & Care</button>  
    </nav>
    
    <input type='search' id='search' 
     placeholder='Search-your-product'
   />
   
    </header>
  )
}

export default Head;