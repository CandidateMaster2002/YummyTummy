import React, {useState, useEffect} from 'react';
import Navbar from './components/navbar/navbarelement';
import "./App.css";

import { useHistory } from "react-router-dom";
import axios from 'axios';
function App(props) {
  let history=useHistory();

  const [search, setSearch]=useState(""
 
  )
 
   
   const [newSearchRestaurant, setNewRestaurants]=useState([]);
   const [restaurants, setRestautrants]=useState([]);

 
  useEffect(()=>{
    axios.get ("https://food-power.glitch.me/restaurants/")
    .then(res=>{
   
    setRestautrants(res.data.data)
     setNewRestaurants(res.data.data);
     
    }
      )
    .catch(err=>{
      console.log(err)

    })

  },[]);
  useEffect(()=>{
    console.log(search)
    if(search!=="")
    {setNewRestaurants(newSearchRestaurant.filter((restaurant)=>{
        return restaurant.name.toLowerCase().includes(search.toLocaleLowerCase());

       

                 }))
 

     
      console.log(newSearchRestaurant)
                }
               
                else{
                  setNewRestaurants(restaurants);
                }
    console.log(newSearchRestaurant);
              },[search])

 
 
 
  const handlerestaurantform=(id, name ,image)=>{
    console.log(id);

    localStorage.setItem("r_id", id);
        localStorage.setItem("r_name", name);
        localStorage.setItem("r_image", image);
 

    history.push('/restaurant/${id}')

  }


  return (
   
   
    <div className="Apps">

     <Navbar data={props.data}/>
     <div className="jumbotron"><h1>YUMMY TUMMY</h1>
    <h6 className="text-warning">Craving? Order food Online and Enjoy</h6>
<i className="images material-icons brand-icon">fastfood</i>


</div>
     <div className="input-group w-50 mx-auto m-5">
 
  <input type="text" className="form-control border border-primary" placeholder="Search Restaurant" aria-label="Restaurant name" aria-describedby="basic-addon2"  name="search" value={search} onChange={e=> setSearch(e.target.value)}/>
  <i className="images material-icons text-primary m-1">search</i>
</div>

  {
   
   
 
<div className="row m-5">{
newSearchRestaurant.map(restaurant=>
 
 <div  key={restaurant.id} className="col-md-4">
  <div className="card mt-5" >

  <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant.cloudinaryImageId}`} alt="restaurant"/>
 
  <div
  className="card-body">
  {restaurant.id}
    <h5 className="text-center text-warning card-title">{restaurant.name}</h5>
    <h6 className="card-text">{restaurant.address}</h6>
   
Rating : {restaurant.avgRating}
<i className="material-icons text-primary">trending_up</i>
<div>
{(restaurant.cuisines).map(cuisines=><h4 key={cuisines} className="btn btn-sm btn-danger m-2">{cuisines}</h4>)}</div>
 <h5>
    <button className="btn btn-primary mx-auto "  onClick={() => handlerestaurantform(restaurant.id, restaurant.name , restaurant.cloudinaryImageId)}>Order</button></h5>
 
  </div>
</div>
</div>
 )}
  </div>
     

  }




    </div>
   
  );
}

export default App;