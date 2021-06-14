import React, {useState, useContext} from 'react'
import Items  from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {CartContext} from './Cart';
import { products } from './products';

function ContextCart() {
    const {item, clearCart, totalItems, totalPrice} = useContext(CartContext)

    // const [item, setItem] = useState(products);
    if(item.length===0){
        return(
            <>
            <header>
                <div className="continue-shopping">
                    {/* <img src="./images/arrow.png" alt="arrow" className="arrow-icon" /> */}
                    <i className="fas fa-arrow-left arrow-icon"></i>
                    <h3>continue shopping</h3>
                </div>

                <div className="cart-icon">
                    {/* <img src="./images/cart.png" alt="cart-logo" /> */}
                    <i className="fas fa-shopping-cart fa-3x cart-icon"></i>
                    <p>0</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count"> 0 </span>  items in shopping cart</p>

                <div className="cart-items">

                    <div className="cart-items-container">
                    <Scrollbars>
                        { 
                         
                         item.map((curItem) => {
                                 return  <Items key={curItem.id} {...curItem} />
                             })
                        
                         }
                         </Scrollbars>
                    </div>
                </div>
                 <div className="card-total">
                    <h3>cart total: <span> 0₹ </span></h3>
                    <button>CheckOut</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>

            </section>
        </>
        )
    }

    return (
        <>
            <header>
                <div className="continue-shopping">
                    {/* <img src="./images/arrow.png" alt="arrow" className="arrow-icon" /> */}
                    <i className="fas fa-arrow-left arrow-icon"></i>
                    <h3>continue shopping</h3>
                </div>

                <div className="cart-icon">
                    {/* <img src="./images/cart.png" alt="cart-logo" /> */}
                    <i className="fas fa-shopping-cart fa-3x cart-icon"></i>
                    <p>{totalItems}</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count"> {totalItems} </span>  items in shopping cart</p>

                <div className="cart-items">

                    <div className="cart-items-container">
                    <Scrollbars>
                        { 
                         
                         item.map((curItem) => {
                                 return  <Items key={curItem.id} {...curItem} />
                             })
                        
                         }
                         </Scrollbars>
                    </div>
                </div>
                 <div className="card-total">
                    <h3>cart total: <span> {totalPrice} </span></h3>
                    <button>CheckOut</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>

            </section>
        </>
    )
}

export default ContextCart


