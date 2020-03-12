import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber, trackClicks }) => {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
      <br />
      <h3>Times the increment/decrement buttons have been clicked: {trackClicks}</h3>
      <br />
      <input type="number" 
      onChange={event => onInputNumberChange(event.target.value)} 
      value={numberInputted} />
      <button onClick={onInputNumber}>Change Count Number</button>
    </div>
  );
}
export default Counter;