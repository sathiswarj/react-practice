import React from 'react';

// Higher-order component to pass a component another component as arguments and return a new component
//The OrderMessage function acts as a Higher order component, which takes a component (Message) and returns a new functional component. It passes all props down to the wrapped component.
const OrderMessage = (Message) => {
  return (props) => {
    return (
      <div>
        <Message {...props} /> {/* {...props} in the returned functional component allows passing any additional props to the DisplayMsg component*/}
      </div>
    );
  };
};

// DisplayMsg component to display the message text
const DisplayMsg = ({ text }) => {
  return <div>{text}</div>;
};

// DisplayMsg function passed as an argument to the OrderMessage function
const DisplayConfirm = OrderMessage(DisplayMsg); // Creating a new component using HOC

const HigherOrder = () => {
  return (
    <>
      <h1>Higher Order Component Example</h1>
      <h4>
        <DisplayConfirm text="Hello, User!" /> {/* Passing a message to DisplayConfirm component as props */}
      </h4>
    </>
  );
};

export default HigherOrder;
