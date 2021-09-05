import React from 'react'
import { Link } from "react-router-dom";

const UserAlbum = ({ id, title, item }) => {
  return (
    <div key={id} className="user-wrapper">
      <h4>{title}</h4>
      <Link to={`/user/albums/${item.id}/photos`} className="link">
        <button>View Album Details</button>
      </Link>
    </div>
  );
}

export default UserAlbum
