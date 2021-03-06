import React from 'react'
import { Link } from "react-router-dom";

const UserAlbum = ({ item }) => {
  return (
    <div key={item.id} className="user-wrapper">
      <h4>{item.title}</h4>
      <Link to={`/user/albums/${item.id}/photos`} className="link">
        <button>View Album Details</button>
      </Link>
    </div>
  );
}

export default UserAlbum
