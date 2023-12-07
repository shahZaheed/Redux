import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket,removeFromBasket } from './basketSlice';

const Product = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasket({ id, name, price }));
  };
  const handleRemoveFromBasket=()=>{
    dispatch(removeFromBasket({id}))
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToBasket}>Add to Basket</button>
      <button onClick={handleRemoveFromBasket}>Remove</button>
    </div>
  );
};

export default Product;