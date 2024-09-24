// useMemo is a React hook that helps optimize performance by memoizing the result of a function.
// It is useful for expensive calculations or data processing.
// useMemo prevents unnecessary re-renders by only recalculating when dependencies change.

import React, { useMemo, useState } from 'react';

function MemoHook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
// Simulate expensive calculation

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) { } 
    return num * 2;
  };

  // useMemo stores the calculated value and recalculates only when dependency changes
  const calculatedValue = useMemo(() => {
    return expensiveCalculation(count);   
  }, [count]);

  return (
    <div>
      <h1>Memoized Value: {calculatedValue}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default MemoHook;
