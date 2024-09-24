import React from 'react';

 const HigherOrder = (Message) => {

  const isAuthenticated = true;  
  
  return function EnhancedComponent(props) {
    if (!isAuthenticated) {
      return <p>User not authenticated</p>;
    } else {
      return <Message {...props} />;
    }
  };
};
 
const Message = () => {
  return (
  <><h1>Profile</h1>
  <p>User was successfully logined!!</p>
  </>
)};

 
export default HigherOrder(Message);
