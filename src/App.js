import { useState, Fragment } from "react";
import "./App.css";
import axios from "axios";
import GithubState from "./context/github/GithubState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import UserSearch from "./components/users/UserSearch";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/pages/User";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };

  const getRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const showAlert = (alert) => {
    setAlert(alert);

    setTimeout(() => setAlert(null), 2500);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <div className="container">
                    {alert !== null && (
                      <Alert msg={alert.msg} type={alert.type} />
                    )}
                    <UserSearch clearUsers={clearUsers} setAlert={showAlert} />
                    <Users />
                  </div>
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:username"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  user={user}
                  loading={loading}
                  getRepos={getRepos}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
