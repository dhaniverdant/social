import React from 'react'
import { Link } from "react-router-dom";

const UserAlbum = ({ id, title, item }) => {
  return (
    <div key={id} className="user-wrapper">
      <h4>aa{title}</h4>
      {/* <div>ID : {item.id}</div> */}
      {/* <Link to={`/userProfile/${item.id}`} className="link"> */}
      <Link to={`/user/albums/${item.id}/photos`} className="link">
        <button>View Album Details</button>
      </Link>
    </div>
  );
}

export default UserAlbum
