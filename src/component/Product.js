import React, { useEffect } from 'react';
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

function Product() {
  const dispatch = useDispatch();
  const { data: product, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className='productsWrapper'>
      {/* Render the product data */}
      {status === STATUSES.LOADING ? (
        <p>Loading...</p>
      ) : status === STATUSES.ERROR ? (
        <p>Error loading products</p>
      ) : (
        product.map((product) => (
          <div key={product.id} className='card'>
            <img src={product.image} alt='' />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn' onClick={() => handleAdd(product)}>
              Add to cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Product;
