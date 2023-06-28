import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';


function Cart() {
  const items = useSelector((state) => state.cart);
  const disPatch = useDispatch()

  const handleRemove = (productId)=>{
    console.log(productId)
    disPatch(remove(productId))
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="cartCard" key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <h5>{item.price}</h5>
              <button className="btn" onClick={()=> handleRemove(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
