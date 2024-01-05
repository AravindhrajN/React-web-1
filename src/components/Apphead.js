

import { FormControl, InputGroup, } from 'react-bootstrap';








 const Head=()=>{
     
  
  
  

  return(
  <div className='nav' >
     <h1 >MyShop</h1>
   
    <InputGroup  className='InputGroup'>
    <button className='Products' > Products</button>
    <button className='Our mission' >Our mission </button>
     <button className='Tips' > Tips & Care</button>  
    </InputGroup>
    <FormControl className='formcontrol' 
     placeholder='Search-your-product'
   />
   
    </div>
  )
}

export default Head;