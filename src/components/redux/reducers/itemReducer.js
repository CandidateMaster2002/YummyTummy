import {ActionTypes} from "../contants/actionTypes"
const initialStore={
    items:[],
    total:0,
   
    }
    export const itemReducer=(state=initialStore,{type,payload})=>{
    switch(type){
    case ActionTypes.SET_ITEMS:
   // console.log("hello")
    console.log(state);
    return {...state, items:payload.details, total:payload.total};
    case ActionTypes.INCREMENT:
        const upstate=payload.details
        let total=payload.total
        console.log(upstate)
       upstate.map((current)=>{
            if(current.id===payload.id){
                current.quantity=payload.quantity+1;
               total=total+current.price;
               console.log(total)
            }
            return(current.id===payload.id)

        })
        console.log(upstate);
        return{...state, items:upstate, total:total}

        case ActionTypes.DECREMENT:
            const downstate=payload.details
        let total1=payload.total
        console.log(downstate)
       downstate.map((current)=>{
            if(current.id===payload.id && current.quantity>0){
                current.quantity=payload.quantity-1;
               total1=total1-current.price;
               console.log(total1)
            }
            return current.id===payload.id

        })
        console.log(downstate);
        return{...state, items:downstate, total:total1}

        case ActionTypes.REMOVEITEM:
            let total3=payload.total;
            console.log(payload.total);
            let currentstate=payload.details;
            const updatecurrentstate=currentstate.filter((currEle)=>{
                if(currEle.id===payload.id){
                console.log(currEle.quantity)
                console.log(total3)

                total3=total3-(currEle.price*currEle.quantity);
                console.log(total3)
                }
               
                return currEle.id!==payload.id
            })
            console.log(updatecurrentstate);
            console.log(total3);
            return{...state, items:updatecurrentstate, total:total3 }




       
    default:
    return state;
    }}