import React from 'react';

const Name = React.memo(({ handleSubmit , value}) => {
  console.log('Child rendered');
  return (
    <>
    <p>{value}</p>
      <button onClick={handleSubmit}>Click</button>
    </>
  );
});

export default Name;
