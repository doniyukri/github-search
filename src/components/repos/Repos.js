import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GithubContext from "../../context/github/githubContext";

const Repos = () => {
  const githubContext = useContext(GithubContext);

  return (
    <div className="container">
      {githubContext.repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
