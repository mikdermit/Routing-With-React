import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import GoBackButton from './components/GoBackButton.js'
import GoForwardButton from './components/GoForwardButton.js'
import Home from './components/Home'
import UserList from './components/UserList.js'
import UserProfile from './components/UserProfile.js'
import NewUser from './components/NewUser.js'
import NoMatch from './components/NoMatch.js'


function App() {
  return (
    <div className="App">
      <GoBackButton />
      <GoForwardButton />
      <Link to="/">Home</Link>
      <Link to="/user/new">New User</Link>
      <UserList />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/user/new">
          <NewUser />
        </Route>
        <Route path="/user/:userId">
          <UserProfile />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
