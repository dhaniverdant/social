import React, { useState, useEffect } from 'react';

const PhotoDetails = ({ match }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?id=' + match.params.id)
      .then(res => res.json())
      .then(result => setItems(result));
  });

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <div>Image details for ID {item.id}</div>
          <h4>{item.title}</h4>
          <img alt={item.id} src={item.url} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PhotoDetails;
