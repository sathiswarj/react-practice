import React from 'react';
// React.memo is used to memoize the Name component, preventing unnecessary re-renders

const Name = React.memo(({ handleSubmit, value }) => {  
  // handleSubmit and value are passed as props from the Callback component

  console.log('Child rendered');  // This message logs whenever the component re-renders

  return (
    <>
      <p>{value}</p>
      <button onClick={handleSubmit}>Click</button>
    </>
  );
});

export default Name;
