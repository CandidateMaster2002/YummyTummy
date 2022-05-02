import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import {setItems} from '../redux/actions/itemActions';
import Navbar from '../navbar/navbarelement';

const RestaurantDetail=(props)=>{
let history=useHistory();
const {idparam}=useParams();
 const [menuitem,setmenuitem] = useState([])
const [restaurant_detail, setRestaurantDetail]=useState([{
discount:"",
avg_rating:"",
cloudinaryimageId:"",
cuisines:[],


}])

useEffect(()=>{




 
    axios.get(`https://food-power.glitch.me/restaurant/${props.id}`)
    .then(res=>{
   
   
  for(var key in res.data.data.menu.items){
  let result= res.data.data.menu.items[key];
 
  let menus={
  item_id: key,
  category:result.category,
  in_stock:result.inStock,
  food_name:result.name,
  is_veg:result.isVeg?true:false,
  price:result.price,
  discount:result.itemDiscount,
 


  }
  menuitem.push(menus)

 
 

 

  }
 
  setmenuitem(menuitem);
  let dis="";


  if(res.data.data.aggregatedDiscountInfo)

  dis=res.data.data.aggregatedDiscountInfo.descriptionList[0].meta;
  else
  dis=""
 

     let newobj={
      discount:dis,
      avg_rating:res.data.data.avgRating,
      cloudinaryimageId:props.image,
      cuisines:res.data.data.cuisines,
     
     

     }
       
    setRestaurantDetail(newobj);
   

   
    }
      )

    .catch(err=>{
      console.log(err)})
       return () => function cleanup() {
           
        }

    },[])
const [details, setDetails]=useState([]);
const dispatch=useDispatch();
const [totalprice, settotalprices]=useState(0);
const [totalitem, settotalitem]=useState(0);
const Handleitemsubmit=(item_id, name, category, price)=>{

 settotalitem(totalitem+1);
 
 
  setDetails(prevItems => [...prevItems, {
      id: item_id,
      name:name,
      price:price,
      category:category,
      quantity:1,

    }]);
  settotalprices(totalprice+price);


 
 
 


  // localStorage.setItem(key, JSON.stringify(details));
  // console.log(JSON.parse(localStorage.getItem(key)));

  }
 

  const Handlecheckout=()=>{
 
 
  dispatch(setItems({details:details, total:totalprice}));
  //localStorage.setItem(JSON.parse(localStorage.getItem("activeuser")).username,JSON.stringify({details:details, total:totalprice}));

  settotalprices(0);
  history.push("/cart")

 

 
  }

return(<>
<Navbar/>

<div className="text-center mx-auto">
<h2 className="m-5 text-danger text-center">{props.name}
</h2>
<h4 className="ml-5">Rating :{restaurant_detail.avg_rating}
<i className="material-icons text-primary">trending_up</i>
</h4>
<h6 className="text-danger text-center">{(restaurant_detail.discount)?<p>{restaurant_detail.discount}</p>:<p>No Offer Valid</p>}</h6>

<img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant_detail.cloudinaryimageId}`} alt='restaurant'/>

</div>
<h5>Total Item Selected : {totalitem}</h5>
<button className="btn btn-primary ml-5" onClick={Handlecheckout}>Add to Cart</button>


<ul>

  {
   
   
 
<div className="row m-5" >{
 menuitem.map(item=>
 <div className="col-md-4" key={item.item_id}>
  <div className="card mt-5" >


 
  <div className="card-body" >
 
    <h4 className="text-center text-warning card-title"><i className="images material-icons text-warning m-3">
restaurant_menu</i>
{item.food_name}</h4>
        <h6 className="text-center text-primary card-title">{item.category}</h6>
        <div className="card-text">
        <div className="text-primary">{(item.is_veg)?
<div><i className="images material-icons text-success">circle</i></div>:<i className="images material-icons text-danger">circle</i>
}</div>
       
    <div className=" text-primary">
    Price :₹ {item.price}</div>
   
<p className="text-primary">Discount : {item.discount}</p>
<div className=" btn btn-warning" onClick={()=>Handleitemsubmit(item.item_id, item.food_name, item.category, item.price)}>ADD</div>

</div>

  </div>

</div>
</div>
  )}
  </div>
     

  }
</ul>





</>
)
}

export default RestaurantDetail;