
import 'bootstrap/dist/css/bootstrap.min.css';
import Apphead from './components/Apphead';
import AppMain from './components/AppMain';
import Products from './components/Products';
import  './App.css';
import './css/Main1.css';
import './css/Listcard.css';
import './css/Main2.css'
import './css/products.css';
import { useState } from 'react';

function App() {


  const[DisplayValue,setDisplayValue]=useState(true);

    

const handlebuttonclick=(value)=>{
    setDisplayValue(value)
}

  return (
  <div >
    <Apphead DisplayFunction={handlebuttonclick}/><br />
    {(DisplayValue) ? <AppMain />:
    <Products /> }
  </div>
    
    
    
  );
}


export default App;
