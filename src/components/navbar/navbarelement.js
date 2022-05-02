import React from 'react';

import { useHistory } from "react-router-dom";
const Navbar=(props)=>{

  let history=useHistory();


return (
<>
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#/">Yummy Tummy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a  href="#/" className="nav-link active" aria-current="page" onClick={()=>history.push('/')}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/">About</a>
        </li>
         {(JSON.parse(localStorage.getItem("activeuser"))?JSON.parse(localStorage.getItem("activeuser")).token!=="":false)?
       
       <>
        <li className="nav-item">
          <a className="nav-link" href="#/">Welcome {JSON.parse(localStorage.getItem("activeuser"))?JSON.parse(localStorage.getItem("activeuser")).username:""}!</a>
        </li>
         
        <li className="nav-item">
          <a className="nav-link" href="#/" onClick={()=>history.push('./updatecart')}>ViewCart</a>
        </li>
         
       
         
         
         
          <li className="nav-item">
        <a className="nav-link"  href="#/" onClick={()=>history.push('/logout')}>Logout</a>
        </li>
        </>:
       
        <li className="nav-item">
          <a className="nav-link" href="#/" tabindex="-1" aria-disabled="true" onClick={()=>history.push('/login')}>Login</a>
        </li>
      }
       
      </ul>
    </div>
  </div>
</nav>

</>
)
}

export default Navbar;
