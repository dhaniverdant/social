import React, { useState, useEffect } from 'react';

const PostDetails = ({ match }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + match.params.id)
      .then(res => res.json())
      .then(result => setItems(result));
  });

  return (
    <div>
      <div>comments : {items.length}</div>
      {items.map(item => (
        <div key={item.id}>
          <h4>{item.email}</h4>
          <div>{item.body}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostDetails;
