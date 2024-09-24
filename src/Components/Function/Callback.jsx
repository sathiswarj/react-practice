// useCallback is used to memoize the function, preventing it from being re-created on every render unless dependencies change.
import React, { useState, useCallback } from 'react';
import Name from './Name';

const Callback = () => {
  const [count, setCount] = useState(0);  // State for count
  const [value, setValue] = useState(0);  // State for value

  // Memoized function using useCallback to avoid unnecessary re-creations on each render
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setValue((prevValue) => prevValue + 1); // Increment value
  }, []); // Empty dependency array means handleClick won't be re-created unless the component is re-mounted

  return (
    <>
      <div>
        <h2>{count}</h2>
        {/* Increment count on button click */}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      </div>
      {/* Passing memoized handleClick function and value to the Name component */}
      <Name handleSubmit={handleClick} value={value} />
    </>
  );
};

export default Callback;
