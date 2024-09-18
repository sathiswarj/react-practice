import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('Userdata')) || [];
    setData(userdata);
  }, []);

  const addUser = (user) => {
    const updatedData = [...data, user];
    localStorage.setItem('Userdata', JSON.stringify(updatedData));
    setData(updatedData);
  };

  const deleteUser = (id) => {
    const newData = data.filter((user) => user.id !== id);
    localStorage.setItem('Userdata', JSON.stringify(newData));
    setData(newData);
  };

  const updateUser = (updatedUser) => {
    const newData = data.map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    );
    localStorage.setItem('Userdata', JSON.stringify(newData));
    setData(newData);
  };
  

  return (
    <UserContext.Provider value={{ deleteUser, addUser, data, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};