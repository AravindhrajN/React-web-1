
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Products from './components/Products';
import  './App.css';
import './css/Main1.css';

import './css/Main2.css'
import './css/products.css';
import'./css/Apphead.css';
import './css/order.css';
import './css/ordersummary.css';
import './css/Productframe.css';
import './css/footer.css';
import './css/section.css';
import Order from './components/Order';
import Cart from "./components/cart";
import './css/cart.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Faceproducts from './components/Faceproducts';
import Bodyproducts from './components/Bodyproducts';
import Productframe from './components/Productframe';
import Ordersummary from './components/Ordersummary';


function App() {




const addtocart=(product)=>{
  console.log( "from me"+product.id,product.prodata);



   const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItemIndex = existingCart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
   
      localStorage.setItem('cart', JSON.stringify(existingCart));
      console.log("Existing Cart after adding old item:", existingCart);
     
        
         } else {
       
          existingCart.push({ ...product, quantity: 1 });
          localStorage.setItem('cart', JSON.stringify(existingCart));
          console.log("Existing Cart after adding item:", existingCart);
         

        }
        
  
     
    }
    const item = JSON.parse(localStorage.getItem('cart')) || [];
    
    //const updatedCart = item.filter((item) => item.id === 201);
  
    // Store updated cart items back to browser storage
   // localStorage.setItem('cart', JSON.stringify(updatedCart));


    console.log("from item",item);
  return (

  
      <Router>
          <Routes>
              <Route
                  path="/"
                  element={<Home />}
              ></Route>
             
              <Route
                  path="/facepro"
                  element={<Faceproducts addcart={addtocart} style={{backgroundImage:'linear-gradient(90deg, rgba(246,202,155,1) 0%, rgba(172,245,196,1) 97%)'}} style1={{backgroundColor: '#fff6c6'}}/>}
              ></Route>
              <Route
                  path="/bodypro"
                  element={<Bodyproducts addcart={addtocart} style={{backgroundImage:'linear-gradient(90deg, rgba(246,202,155,1) 0%, rgba(172,245,196,1) 97%)'}} style1={{backgroundColor: '#fff6c6'}} />}
              ></Route>
              <Route
                  path="/products"
                  element={<Products />}
              ></Route>
              <Route
                  path="/Productframe"
                  element={<Productframe  addcart={addtocart}/>}
              ></Route>
               <Route
                  path="/ordersummary"
                  element={<Ordersummary />}
              ></Route>
               <Route
                  path="/order"
                  element={<Order />}
              ></Route> 
               <Route
              path="/cart"
              element={<Cart cartdata={item} />}
          ></Route>
          </Routes>
      
  </Router>
    
 
  );
}


export default App;
