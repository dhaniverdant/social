import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router';

const PostDetails = ({ match }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + match.params.id)
      .then(res => res.json())
      .then(result => setItems(result));
  });

  return (
    <div>
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
