import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,multiply } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(multiply())}>multiply</button>

    </div>
  );
}
