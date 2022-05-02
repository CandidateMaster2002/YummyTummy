import React from 'react';
import { useHistory } from 'react-router';
import img from './food.gif'
import Navbar from  '../navbar/navbarelement';
const Checkout=()=>{
    let history=useHistory();
   
    let user=JSON.parse(localStorage.getItem("activeuser"))? JSON.parse(localStorage.getItem("activeuser")).username:false;
    console.log(user);

    if(user)
   { const cart={items:[], total:0};
   console.log(cart);
    localStorage.setItem(user, JSON.stringify(cart));
   }
    return(
    <>
    <Navbar/>
    <div className="text-center mx-auto">
    <h1 className="text-primary m-5">Thanks for choosing us......
    </h1>
        <h3 className="text-success m-4">Enjoy Your Meal with <i><b>YUMMY TUMMY</b></i></h3>
        <h5 className="text-success m-3"> YOUR FOOD IS GETTING READY</h5>
        <div><img src={img} alt="food_preperaring"/></div>
   
    </div>
    </>
    );
}
export default Checkout;