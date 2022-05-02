import React from 'react'
import { useHistory } from "react-router-dom";

import { Redirect } from 'react-router-dom';
const Logout=(props)=>{
    const userdetails={username: JSON.parse(localStorage.getItem("activeuser")).username, password:JSON.parse(localStorage.getItem("activeuser")).password, token:""}
   
localStorage.setItem("activeuser", JSON.stringify(userdetails));

let history=useHistory();
console.log(history.goBack)

if (true) {
    return <Redirect to='/' />
   }
   
}
export default Logout;
