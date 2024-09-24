import React, { createContext, useState, useEffect } from "react";

// createContext is used to create a context for the UserContext variable
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // useEffect to load user data from localStorage when the component first mounts
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('Userdata')) || [];
    setData(userdata);
  }, []);

  // Function to add a new user to the context and localStorage
  const addUser = (user) => {
    const updatedData = [...data, user]; // Add new user to the existing data array
    localStorage.setItem('Userdata', JSON.stringify(updatedData)); // Store updated data in localStorage
    setData(updatedData); // Update the state with the new data
  };

  // Function to delete a user by their ID
  const deleteUser = (id) => {
    const newData = data.filter((user) => user.id !== id); // Filter out the user to delete
    localStorage.setItem('Userdata', JSON.stringify(newData)); // Store updated data in localStorage
    setData(newData); // Update the state after deletion
  };

  // Function to update an existing user's data
  const updateUser = (updatedUser) => {
    const newData = data.map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user // If the user exists, update their data; otherwise, keep them unchanged
    );
    localStorage.setItem('Userdata', JSON.stringify(newData)); // Store updated data in localStorage
    setData(newData); // Update the state with the new data
  };

  return (
    // UserContext.Provider provides context values (functions and data) to the rest of the application
    <UserContext.Provider value={{ deleteUser, addUser, data, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
