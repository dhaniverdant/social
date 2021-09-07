import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Post from '../Post/Post';
import UserAlbum from '../UserAlbum/UserAlbum';
import './UserProfile.scss';

const UserProfile = ({ match }) => {
  const [post, setPost] = useState([]);
  const [album, setAlbum] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts?userId=' + match.params.id),
      fetch('https://jsonplaceholder.typicode.com/albums?userId=' + match.params.id),
      fetch('https://jsonplaceholder.typicode.com/comments?postId=' + match.params.id)
    ])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([data1, data2, data3]) => {
        setPost(data1);
        setAlbum(data2);
        setComments(data3);
      })
  });
  let history = useHistory();

  return (
    <div className="profile-wrapper">
      <button onClick={() => history.goBack()}>Back to Home</button>
      THIS IS POSTS USER {match.params.id}
      <Tabs>
        <TabList>
          <Tab>POST</Tab>
          <Tab>ALBUM</Tab>
        </TabList>

        <TabPanel>
          <div>
            {post.map(item => (
              <Post item={item} comments={comments} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {album.map(item => (
              <UserAlbum item={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default UserProfile;
