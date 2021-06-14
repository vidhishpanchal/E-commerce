// import { useContext } from "react";
// import { CartContext } from "./Cart";


const reducer = (state, action)=>{
    // const {notify} = useContext(CartContext)
    switch (action.type) {
        case "REMOVE_ITEM":
            return{
                ...state,
                item: state.item.filter((currentElement)=>{
                    return currentElement.id !== action.payload;
                })
            };
        case "CLEAR_CART":
            return{
                ...state,
                item:[]
            }
        case "INCREMENT":
            return{
                 item : state.item.map((currentItem)=>{
                    if (currentItem.id === action.payload){
                        return{
                            ...currentItem,
                            quantity:currentItem.quantity+1 
                        }
                   
                    }
                    return currentItem
                })
              
            }
            case "DECREMENT":
                return{
                   item: state.item
                      .map((curElem) => {
                        if (curElem.id === action.payload) {
                            if(curElem.quantity !== 0)
                                 return { ...curElem, quantity: curElem.quantity - 1 }
                            else{
                                // curElem.filter((curElem) => {curElem.quantity !== 0})
                                window.alert("Quantity cannot be less than 0")
                                // notify();
                            }
                        }
                        return curElem;
                      })
                    // .filter((curElem) => {curElem.quantity !== 0})
                 
                  }
            case "GET_TOTAL":
                {
                    let {totalItems, totalPrice} = state.item.reduce(
                        (accum, curVal)=>{
                            let {quantity, price} = curVal
                            accum.totalItems = accum.totalItems+ quantity
                            accum.totalPrice = accum.totalPrice + price*quantity
                            return accum
                        },{
                        totalItems:0,
                        totalPrice:0
                    })
                    return {...state, totalItems, totalPrice}
                }
        
          
    
        default:
            return state;
    }
       
}

export default reducer