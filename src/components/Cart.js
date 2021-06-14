import React, {createContext, useState, useReducer, useEffect} from 'react'
import "./cart.css"
import { products } from './products';
import Items  from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import reducer from './Reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const decrement = (id)=>{
        dispatch({
            type:"DECREMENT",
            payload: id
        })
    }
    useEffect(() => {
       dispatch({type:"GET_TOTAL"})
    }, [state.item])
    // const notify = () => toast.warn('Quantity cannot be less than 0', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     });

    return (
        <>
        <CartContext.Provider value={{...state, removeItem, clearCart, increment, decrement}}>
         <ContextCart />
         </CartContext.Provider>
         {/* <ToastContainer /> */}
        </>
    )
}

export default Cart