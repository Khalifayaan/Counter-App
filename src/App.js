

import React, { useState } from 'react';
import './index.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default CounterApp;
