import React, {} from 'react'
import {Route, Switch, BrowserRouter } from 'react-router-dom';

import Logout from './components/logout';
import Login from './components/login';
import  Error from './components/error';
import Cart from './components/cart/cart';
import "./App.css";
import App from './App';
import RestaurantDetail from './components/restaurants/restaurantdata';
import Checkout from './components/cart/checkout';
import UpdateCart from './components/cart/updatecart';
const Main=()=>{

 

return (
<BrowserRouter>
<Switch>

    <Route exact path="/" component={()=><App data={localStorage.getItem('email')
  }/>}/>

<Route exact path="/logout" component={Logout}/>
<Route exact path ="/login" component={Login}/>
<Route exact path="/restaurant/:idparams" component={JSON.parse(localStorage.getItem("activeuser"))?( JSON.parse(localStorage.getItem("activeuser")).token!=="" ?((props)=><RestaurantDetail id={localStorage.getItem('r_id')} name={localStorage.getItem('r_name')} image={localStorage.getItem('r_image') }/>): Login): Login}/>
<Route exact path="/cart" component={JSON.parse(localStorage.getItem("activeuser"))?(JSON.parse(localStorage.getItem("activeuser")).token!=="" ? Cart : Login):Login }/>
<Route exact path="/checkout" component={Checkout}/>
<Route exact path="/updatecart" component={UpdateCart}/>
<Route component={Error}/>

</Switch>
</BrowserRouter>

);
}

export default Main;