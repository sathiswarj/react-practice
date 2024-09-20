import React, { useState, useCallback } from 'react';
import Name from './Name';

const Callback = () => {
  const [count, setCount] = useState(0);
  const [value,setValue] = useState(0)

  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setValue(value+1)   

  }, [value]);  

  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={()=>   setCount(prevCount => prevCount + 1)}>Increment</button>
      </div>
      <Name handleSubmit={handleClick} value={value} />
    </>
  );
};

export default Callback;

