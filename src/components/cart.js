import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const removeproduct=(prop)=>{

  const item = JSON.parse(localStorage.getItem('cart')) || [];
  
   const updatedCart = item.filter((item) => item.id !== prop);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    console.log("updatedcart from update",item);
window.location.reload(true);
  
}
const updatequantity=(prop,pro)=>{
  const Cart = JSON.parse(localStorage.getItem('cart')) || [];
  const Item = Cart.findIndex((item) => item.id ===pro.id);

  if(prop===1 &&Cart[Item].quantity>=10){
    window.alert("maxout the product to sales per customer and plz contact our support for max product");
   }else  if(prop===-1 && Cart[Item].quantity<=1){
    window.alert("minmum product reached to sales per customer");
   }else{
    if(prop===1){
    Cart[Item].price +=((pro.price)/pro.quantity);
    Cart[Item].quantity +=prop;
  
    localStorage.setItem('cart', JSON.stringify(Cart));
    console.log(" Cart after adding item:", Cart);
    window.location.reload(true);}
    else{
      Cart[Item].price -=((pro.price)/pro.quantity);
      Cart[Item].quantity +=prop;
    
      localStorage.setItem('cart', JSON.stringify(Cart));
      console.log(" Cart after adding item:", Cart);
      window.location.reload(true);
    }
   }
  }

 

const Cart = ({ cartdata }) => {
  const [cartItems, setCartItems] = useState([]);
 
  const navigate = useNavigate();

  const handleclick=(prop)=>{
     
    const data1={id:prop.id,name:prop.prodata}

    navigate("/Productframe", { state: data1 });
      
}



  useEffect(() => {
    console.log("New cartdata received:", cartdata);
    setCartItems(cartdata);
  
  }, [cartdata,]);

  console.log("Current cartItems state:", cartItems);

  
  const clearCart = () => {
   
    localStorage.removeItem('cart');
  };
  
    

  return (<>
    <div className="carthead">
      <h1>My_cart</h1>
      <button onClick={()=>{clearCart()}}>Remove All</button>
    </div>
    <div className="cartwrapper">
      {cartItems.map((item) => (
        <div className="cartitem p-2 bg-light m-2" key={item.id}>
          <figure className="cartfig"><img src={"https://wbp.onrender.com/api/getimage/"+item.id+"/"+item.prodata}      alt={item.name} /></figure>
          <p>{item.name}</p>
          <p> {item.price}</p>
        <div className="quantity"><button onClick={()=>{updatequantity(1,item)}}>+</button> <p > {item.quantity}</p>   <button onClick={()=>{updatequantity(-1,item)}}>-</button> </div> 
      <div className="purchase">  <button className="buy" onClick={()=>handleclick(item)} target="_ablank" >BUY</button>
          <button className="remove" onClick={()=>{removeproduct(item.id)}}> Remove</button></div>
        
        </div>
      ))}
    </div></>
  );
};

export default Cart;
