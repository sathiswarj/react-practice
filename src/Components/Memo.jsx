import React, { useMemo, useState } from 'react';

function ExpensiveCalculationComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
  };

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

export default ExpensiveCalculationComponent;
