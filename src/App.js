import React from "react";
import "./App.css";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import User from "./components/pages/User";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:username" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
