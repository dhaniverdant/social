import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
import { Link } from "react-router-dom";

const PhotoList = ({ match }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + match.params.id)
      .then(res => res.json())
      .then(result => setItems(result));
  });

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          {/* <h4>{item.title}</h4> */}
          <img alt={item.id} src={item.thumbnailUrl} />
          <br />
          <Link to={`/user/albums/${match.params.id}/photos/${item.id}`} className="link">
            <button>View Album Details</button>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
