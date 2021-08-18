import React, { useState, useEffect, createContext } from 'react'

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(result => setItems(result));
  });

  return (
    <UserContext.Provider value={[items, setItems]}>
      { props.children }
    </UserContext.Provider>
  );
}
