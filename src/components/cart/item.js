import React from 'react';

import { useSelector , useDispatch } from "react-redux";
import { incItem, decItem, removeItem } from '../redux/actions/itemActions';
const Items=(props)=>{
    const dispatch=useDispatch();
const Increment=(quantity, id)=>{

  dispatch(incItem({details:itemdetails.allitems.items,quantity:quantity, id:id, total:itemdetails.allitems.total}));
}
const Decrement =(quantity, id)=>{

    dispatch(decItem({details:itemdetails.allitems.items,quantity:quantity, id:id, total:itemdetails.allitems.total}));
  }

const RemoveItem=(id)=>{
    dispatch(removeItem({details:itemdetails.allitems.items, id:id, total:itemdetails.allitems.total}));

}
let itemdetails=useSelector((state)=>state);

console.log(itemdetails);


return (
<>
<div>{
(itemdetails.allitems.items).map(item=>
<div className="items-info">

    <div className="title">
    <h3 className="text-success">{item.name}</h3>
    <p>{item.category}</p>
   
    </div>
    <div className="add-minus-quantity">
    <i className="images material-icons text-primary" type="submit" onClick={()=>Increment(item.quantity, item.id)}>
    add
</i>
<input type="text" placeholder={item.quantity}/>
<i className="images material-icons text-primary" type="submit" onClick={()=>Decrement(item.quantity, item.id )}>
    remove
</i>
    </div>
    <div className="price"><h5>₹ {item.price}/Plate </h5>
    </div>
    <div className="remove-item">
   
    <i className="images material-icons text-danger" onClick={()=>RemoveItem(item.id)}>
    delete

</i>

    </div>
    <hr/>
    </div>
   
    )}
    </div>
</>

)
}
export default Items;