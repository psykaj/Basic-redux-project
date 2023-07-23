import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {

  // If we want to access the value of any slice then use useSelector();
  const count = useSelector((state) => state.counter.value );

  // If we want to access reducres functions then use useDispatch();
  const dispatch = useDispatch();

  return (
    <div>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <br />
      <br />
      
      <div>{count}</div>

      <br />
      <br />

      <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
  );
}

export default Counter;