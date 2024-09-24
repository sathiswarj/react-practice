// useRef is used for accessing the DOM, manipulating the DOM, and storing previous values without causing re-renders

import React, { useRef, useEffect, useState } from 'react';

const Ref = () => {
  const [count, setCount] = useState(0); // State to track the current count
  const prevCount = useRef(); // useRef to store the previous count value

  useEffect(() => {
    prevCount.current = count; // Store the previous value in ref after every render
  }, [count]); // Runs whenever 'count' changes

  return (
    <div>
      <h2>Current: {count}</h2> {/* Display the current state value */}
      <h2>Previous: {prevCount.current}</h2> {/* Display the previous state value */}
      <button onClick={() => setCount(count + 1)}>Increment</button> {/* Increment count */}
    </div>
  );
};

export default Ref;
