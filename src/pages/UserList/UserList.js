import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './UserList.scss';
import { UserContext } from '../../components/UserContext/UserContext'

function UserList() {
  const [items] = useContext(UserContext)

  return (
    <div className="card-wrapper">
      {items.map(item => (
        <div key={item.id} className="user-wrapper">
          <div className="image-wrapper">
            <div className="circle" />
            <div>{item.name}</div>
            <div>@{item.username}</div>
          </div>
          <Link to={`/user/${item.id}`}>
            <button className="show-profile-button">View Profile</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
