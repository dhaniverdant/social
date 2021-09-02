import React, { useState, useEffect } from 'react';
import './User.scss';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(res => res.json())
//       .then(result => {
//         this.setState({
//           isLoaded: true,
//           items: result
//         });
//       });
//   }

//   render() {
//     const { items } = this.state;
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             <h3>{item.url}</h3>
//             <img src={item.thumbnailUrl} alt="abcd" />
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

function User() {
  // Declare a new state variable, which we'll call "count"
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(result => setItems(result));
  });

  return (
    <div className="card-wrapper">
      {items.map(item => (
        <div key={item.id} className="user-wrapper">
          <div>{item.name}</div>
          <div>@{item.username}</div>
          {/* <img src={item.thumbnailUrl} alt="abcd" /> */}
        </div>
      ))}
    </div>
  );
}

export default User;
