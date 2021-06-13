import React, {useState} from 'react'
import "./cart.css"
import { products } from './products';
import Items  from './Items';
import { Scrollbars } from 'react-custom-scrollbars-2';

function Cart(){

    const [item, setItem] = useState(products);

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
                    <p>7</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count"> 7 </span>  items in shopping cart</p>

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
                    <h3>card total: <span> 23000₹ </span></h3>
                    <button>CheckOut</button>
                </div>

            </section>
        </>
    )
}

export default Cart