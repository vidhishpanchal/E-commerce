import React, {createContext, useState, useReducer} from 'react'
import "./cart.css"
import { products } from './products';
import Items  from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import reducer from './Reducer';

import ContextCart from './ContextCart';
export const CartContext = createContext()
function Cart(){
    const initialState = {
        item: products,
        totalAmount:0,
        totalItems:0
    }
    // const [item, setItem] = useState(products);
    const [state, dispatch] = useReducer(reducer, initialState)
    // to delete individual elements
    const removeItem = (id)=>{
        dispatch({
            type:"REMOVE_ITEM",
            payload: id
        })
    }
    const clearCart = ()=>{
        dispatch({
            type:"CLEAR_CART"
        })
    }
    const increment = (id)=>{
        dispatch({
            type:"INCREMENT",
            payload: id
        })
    }

    return (
        <>
        <CartContext.Provider value={{...state, removeItem, clearCart, increment}}>
         <ContextCart />
         </CartContext.Provider>
        </>
    )
}

export default Cart