import React, { useContext } from "react";

import classes from './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import {Type} from '../../Utility/action.type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{basket,user},dispatch]=useContext(DataContext)
  const total = basket.reduce((amount,item)=>{
   return item.price * item.amount + amount
  },0)

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  // Decrement function
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

return (
  <LayOut>
    <section className={classes.container}>
      <div className={classes.cart__container}>
        <h2>Hello, {user?.name || "Guest"}</h2>
        <h3>Your Shopping Basket</h3>
        <hr />
        {basket?.length === 0 ? (
          <p>Oops! Your cart is empty.</p>
        ) : (
          basket.map((item, i) => (
            <section key={i} className={classes.cart_product}>
              <ProductCard
                product={item}
                renderDesc={true}
                flex={true}
                renderAdd={false}
              />
              <div className={classes.btn_container}>
                <button onClick={() => increment(item)}><IoIosArrowUp size={20}/></button>
                <span>{item.amount}</span>
                <button onClick={() => decrement(item.id)}><IoIosArrowDown size={20} /></button>
              </div>
            </section>
          ))
        )}
      </div>

      {basket?.length !== 0 && (
        <div className={classes.subtotal}>
          <div>
            <p>Subtotal ({basket?.length} items)</p>
            <CurrencyFormat amount={total} />
          </div>
          <span>
            <label>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </label>
          </span>
          <Link to="/payments">Continue to checkout</Link>
        </div>
      )}
    </section>
  </LayOut>
);
}

export default Cart;