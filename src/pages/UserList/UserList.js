import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './UserList.css';

function UserList() {
  // Declare a new state variable, which we'll call "count"
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(result => setItems(result));
  });

  return (
    <div className="card-wrapper">
      {items.map(item => (
        <div key={item.id} className="user-wrapper">
          <div>{item.name}</div>
          <div>@{item.username}</div>
          <Link to={`/user/${item.id}`} className="link">
            <button>View Profile</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
