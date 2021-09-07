import React from 'react';
import { Link } from "react-router-dom";
import './Post.scss';

const Post = ({ item, comments }) => {
  return (
    <div className="post-wrapper">
      <h4>{item.title}</h4>
      <div>{item.body}</div>
      <div>{item.body}</div>
      <div>Comments: {comments.length}</div>
      <Link to={`/user/posts/${item.id}/comments`} className="link">
        <button>View Post Details</button>
      </Link>
    </div>
  );
}

export default Post;
