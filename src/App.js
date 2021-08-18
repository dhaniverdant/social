import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PhotoDetails from "./pages/PhotoDetails/PhotoDetails";
import PhotoList from "./pages/PhotoList/PhotoList";
import PostDetails from "./pages/PostDetails/PostDetails";
import UserList from './pages/UserList/UserList';
import UserProfile from "./pages/UserProfile/UserProfile";

export default function App() {
  const NoMatchRoute = () => <div>404 Page</div>;
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/user/:id" exact component={UserProfile} />
          <Route path="/user/posts/:id/comments" exact component={PostDetails} />
          <Route path="/user/albums/:id/photos" exact component={PhotoList} />
          <Route path="/user/albums/:id/photos/:id" exact component={PhotoDetails} />
          <Route component={NoMatchRoute} />
        </Switch>
      </div>
    </Router>
  );
}
