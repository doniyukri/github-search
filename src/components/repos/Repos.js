import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ getRepos, repos, loading }) => {
  return (
    <div className="container">
      {repos.map((repo) => (
        <RepoItem repo={repo} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
