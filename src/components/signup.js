import React from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState} from 'react';


import { useHistory } from "react-router-dom";

function SignupForm (props) {
 
   let history=useHistory();
 
  const [signupvalue,setsignupValue]=useState({
    email:"",
    password:"",
    address:"",
    city:"",
    state:"",
    zip:"",

  });

  let errorsObj = {email:'', password:'', address:'', city:'', state:'', zip:''};
  const [errors, setErrors]=useState(errorsObj);

  const[records, setRecord]=useState({});
 
  const handleFormSunmit=(e)=>{
  setsignupValue({
    ...signupvalue,
    [e.target.name]: e.target.value
  })

}
function OnSignup(e){
    e.preventDefault();
    let error =false;
    const errorObj={...errorsObj};
    if(signupvalue.email===''){
      errorObj.email='Email is required';
      error=true;
    }
    else if(!/\S+@\S+\.\S+/.test(signupvalue.email)){
      errorObj.email="Invalid email format";
      error=true;
    }
    if(signupvalue.password===''){
      errorObj.password='Password is required';
      error=true;
    }
    else if(signupvalue.password.length<8){
      errorObj.password="Password must contain at least 8 character";
      error=true;
    }
    if(signupvalue.address===''){
      errorObj.address='ADDRESS is required';
      error=true;
    }
    if(signupvalue.city===''){
      errorObj.city='City is required';
      error=true;
    }
    if(signupvalue.state===''){
      errorObj.state='State is required';
      error=true;

    }
    if(signupvalue.zip===''){
      errorObj.zip='Zip is required';
      error=true;

    }
    setErrors(errorObj);
    if(!error){
      console.log('form.Submit')
      const newRecords={email:signupvalue.email, password:signupvalue.password, address:signupvalue.address,
        city:signupvalue.city, state:signupvalue.state, zip:signupvalue.zip}
        console.log(newRecords);
        localStorage.setItem(newRecords.email, JSON.stringify(newRecords));
        console.log(JSON.parse(localStorage.getItem(newRecords.email)));


      setRecord([newRecords]);
       console.log(signupvalue);
      console.log(records);
props.storerecord(newRecords);

      alert("Signup successfully");
     
     history.push('/');




    }}
   

    // dispatch(signup({
    //   user:signupvalue.email,
    //   isloggedin:true,

    // }))
  return (
    <>

    <h5 className="text-center text-danger mt-5">Welcome YUMMY TUMMY!!! </h5>
    <h6 className="text-center text-danger">Join us and Enjoy Delicious Meal....</h6>
    <Form className="signupform mx-auto shadow m-5 border" onSubmit={OnSignup}>

      <div className="row m-3">
        <div className="col col-md-6">
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input  type="text" name="email" id="Email" placeholder="Enter email id"  value={signupvalue.email} onChange={handleFormSunmit}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </FormGroup>
        </div>
        <div className="col col-md-6">
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="Password" placeholder="password...." value={signupvalue.password} onChange={handleFormSunmit}/>
          {errors.password && <div className="text-danger">{errors.password}</div>}
          </FormGroup>
        </div>
      </div>
      <FormGroup className="m-5">
        <Label for="address">Address</Label>
        <Input  type="text" name="address" id="Address" placeholder="eg...1234 Main St" value={signupvalue.address} onChange={handleFormSunmit}/>
      {errors.address && <div className="text-danger">{errors.address}</div>}
      </FormGroup>
     
      <div className="row m-3">
        <div className="col col-md-6">
          <FormGroup>
            <Label for="City">City</Label>
            <Input type="text" name="city" id="City" value={signupvalue.city} onChange={handleFormSunmit}/>
          {errors.city && <div className="text-danger">{errors.city}</div>}
          </FormGroup>
        </div>
        <div className="col col-md-4">
          <FormGroup>
            <Label for="State">State</Label>
            <Input type="text" name="state" id="State"  onChange={handleFormSunmit} value={signupvalue.state}/>
          {errors.state && <div className="text-danger">{errors.state}</div>}
          </FormGroup>
        </div>
        <div className="col col-md-2">
          <FormGroup>
            <Label for="Zip">Zip</Label>
            <Input type="text" name="zip" value={signupvalue.zip} onChange={handleFormSunmit}/>
            {errors.zip && <div className="text-danger">{errors.zip}</div>}
          </FormGroup>  
        </div>
      </div>
     
      <Button type="submit" className="signup btn btn-warning mb-5">Signup</Button>
    </Form>
   
</>
  );
}


export default  SignupForm;