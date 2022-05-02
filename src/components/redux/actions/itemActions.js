import {ActionTypes} from '../contants/actionTypes';

export const setItems=(items)=>{
return {
type: ActionTypes.SET_ITEMS,
payload:items,

};

};

export const selectedItem=(item)=>{
return{
type:ActionTypes.SELECTED_ITEM,
payload:item,
};
}

export const settotalprice=(price)=>{
return {
type:ActionTypes.SET_TOTAL_PRICE,
payload:price,

};

};

export const incItem=(item)=>{
    console.log(item);
    return{
        type:ActionTypes.INCREMENT,
       
        payload:item,

    };

};

export const decItem=(item)=>{
    console.log(item);
    return{
        type:ActionTypes.DECREMENT,
        payload:item,

    }
}

export const removeItem=(item)=>{
    return{
   type:ActionTypes.REMOVEITEM,
   payload:item,
    }
}
