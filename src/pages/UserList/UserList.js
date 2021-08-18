import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './UserList.css';
import { UserContext } from '../../components/UserContext/UserContext'

function UserList() {
  const [items] = useContext(UserContext)

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
