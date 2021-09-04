import React, { useState, useEffect } from 'react';
import './User.scss';

function User() {
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
          {/* <img src={item.thumbnailUrl} alt="abcd" /> */}
        </div>
      ))}
    </div>
  );
}

export default User;
