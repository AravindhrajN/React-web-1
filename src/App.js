
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Products from './components/Products';
import  './App.css';
import './css/Main1.css';
import './css/Listcard.css';
import './css/Main2.css'
import './css/products.css';
import'./css/Apphead.css';
import Order from './components/Order';


import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Faceproducts from './components/Faceproducts';
import Bodyproducts from './components/Bodyproducts';
import Productframe from './components/Productframe';

function App() {




  return (

  
      <Router>
          <Routes>
              <Route
                  path="/"
                  element={<Home />}
              ></Route>
             
              <Route
                  path="/facepro"
                  element={<Faceproducts style={{backgroundColor:'rgb(255, 228, 196)'}} style1={{backgroundColor:'brown'}}/>}
              ></Route>
              <Route
                  path="/bodypro"
                  element={<Bodyproducts />}
              ></Route>
              <Route
                  path="/products"
                  element={<Products />}
              ></Route>
              <Route
                  path="/Productframe"
                  element={<Productframe />}
              ></Route>
               <Route
                  path="/order"
                  element={<Order />}
              ></Route>
          </Routes>
      
  </Router>
    
 
  );
}


export default App;
