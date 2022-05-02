import React from 'react';
import { useDispatch } from 'react-redux';
//import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import {setItems} from '../redux/actions/itemActions';
 const UpdateCart=()=>{
     
   
     let user=JSON.parse(localStorage.getItem("activeuser"))? JSON.parse(localStorage.getItem("activeuser")).username:false;
     let details=""
     let total=0;
     let dispatch=useDispatch();
     
     if (user)

     {console.log(JSON.parse(localStorage.getItem(user)));
        console.log(user)
         details=JSON.parse(localStorage.getItem(user))?JSON.parse(localStorage.getItem(user)).items:[];
     total=JSON.parse(localStorage.getItem(user))?JSON.parse(localStorage.getItem(user)).total:0;
     console.log(details);
     if(details){

     dispatch(setItems({details:details, total:total}))
     }}
     console.log("currect");
     return <Redirect to='/cart' />
   
}
export default UpdateCart;