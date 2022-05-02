import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useHistory } from 'react-router';
const About=()=>{
  let history =useHistory();

    const[login, setlogin]=useState({
        username:"",
        password:"",

    })
    const handlechange=(e)=>{
        setlogin({
            ...login,
            [e.target.name]:e.target.value
            })
         console.log(login);  
           
    }
   
   const [isprocessing, setprocessing]=useState(false)

    const Submithandler=(e)=>{
        e.preventDefault();
        setprocessing(true);
       
       
        axios.post("https://food-power.glitch.me/login/", login)
        .then(res=>{
          const tempvalidate={username:login.username, password:login.password, token:res.data.token};

         
     
           localStorage.setItem("activeuser", JSON.stringify(tempvalidate));
           setprocessing(false);
           history.push('/')

         

         
        }
          )
        .catch(err=>{
          alert("Invalid credentials")
          setprocessing(false);

         
   
        })
   
 
       
     
       
       
       
    }

    return(
        <>
       
        <section className="h-100 gradient-form" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                 
                  <h4 className="mt-1 mb-5 pb-1">YUMMT TUMMY </h4>
                </div>

                <form onSubmit={Submithandler}>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input type="text" id="userogin" className="form-control" placeholder="username" name="username" onChange={handlechange} />
                    <label className="form-label" for="form2Example11">UserName</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="passwordlogin" className="form-control"  name="password" onChange={handlechange}/>
                    <label className="form-label" for="form2Example22">Password</label>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">{isprocessing?<p className="">Login Processing </p>:<p>Login</p>}</button>

                  </div>

                 

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">Eating well is always a season</h4>
                <p className="small mb-0">Welcome to Yummy Tummy: place where deleicious dinig and conscious nutrition go hand in hand and where eating well
                can be foundation for a live well lived.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>

    )
}
export default About;