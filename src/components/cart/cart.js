import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router';
import Navbar from '../navbar/navbarelement';
import './cart.css';
import Items from './item';

const Cart=()=>{
   
  const totalitems=useSelector((state)=>state);
let history=useHistory();
localStorage.setItem(JSON.parse(localStorage.getItem("activeuser")).username,JSON.stringify(totalitems.allitems));
console.log(localStorage.getItem(JSON.parse(localStorage.getItem("activeuser")).username));

  return (
    <>
    <Navbar/>
    <header>
    <div className="continue-shopping">
    <h3> continue Ordering...</h3>
 

    </div>
   
    <div className="cart-icon">
    <i className="images material-icons text-primary">
    shopping_cart
</i>
   
   
    </div>
    </header>
    <section className="main-cart-section shadow" data-simplebar>
    <h3 className="text-danger">Order Item Cart</h3>
    <p className="total-items m-2"> Total <span className="total-items-count">{(totalitems.allitems.items).length}</span> items</p>
    <div className="cart-items">
    <div className="cart-items-container bg-gray">
    <Items/>
   
   
   
    </div>
    </div>
<div className="card-total">
<h3>Cart Total : <span>₹{totalitems.allitems.total}</span></h3>
<button onClick={()=>history.push("/checkout")}>Checkout</button>
</div>
    </section>
    </>

    )
}
export default Cart;