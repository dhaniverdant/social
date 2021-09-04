import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import UserAlbum from '../UserAlbum/UserAlbum';
import './UserProfile.scss';

const UserProfile = ({ match }) => {
  const [post, setPost] = useState([]);
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts?userId=' + match.params.id),
      fetch('https://jsonplaceholder.typicode.com/albums?userId=' + match.params.id)
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        setPost(data1);
        setAlbum(data2);
      })
  });
  let history = useHistory();

  return (
    <div className="profile-wrapper">
      <button onClick={() => history.goBack()}>Back to Home</button>
      THIS IS POSTS USER {match.params.id}
      <div>
        {post.map(item => (
          <div key={item.id} className="post-wrapper">
            <h4>{item.title}</h4>
            <div>{item.body}</div>
            <Link to={`/user/posts/${item.id}/comments`} className="link">
              <button>View Post Details</button>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {album.map(item => (
          <UserAlbum id={item.id} title={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
