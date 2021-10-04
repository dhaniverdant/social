import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import './UserList.scss';
import { UserContext } from '../../components/UserContext/UserContext'
import AddUser from '../AddUser/AddUser';

function UserList() {
  const [user, setUser] = useState([]);
  const [items] = useContext(UserContext);

  const onAdd = async (name, username) => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        username: username
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
    .then((res) => {
      if (res.status !== 201) {
        return
      } else {
        return res.json();
      }
    })
    .then((data) => {
      setUser((user) => [...user, data]);
    })
    .catch((err) => {
      console.log(err);
    });
    console.log("send data", user);
  }

  return (
    <div>
      <AddUser onAdd={onAdd} />
      <div className="card-wrapper">
        {items.map(item => (
          <div key={item.id} className="user-wrapper">
            <div className="image-wrapper">
              <div className="circle" />
              <div className="user-name">{item.name}</div>
              <div>@{item.username}</div>
            </div>
            <Link to={`/user/${item.id}`}>
              <button className="show-profile-button">View Profile</button>
            </Link>
          </div>
        ))}
        {user.map(usr => (
          <div key={usr.name} className="user-wrapper">
            <div className="image-wrapper">
              <div className="circle" />
              <div className="user-name">{usr.name}</div>
              <div>@{usr.username}</div>
            </div>
            <Link to={`/user/${usr.id}`}>
              <button className="show-profile-button">View Profile</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
