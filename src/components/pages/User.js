import React, { useContext, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUser(match.params.username);
    githubContext.getRepos(match.params.username);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = githubContext.user;

  if (githubContext.loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <ion-icon name="checkmark-circle-sharp" style={{ color: "#5c8b5c" }} />
      ) : (
        <ion-icon name="close-circle-sharp" style={{ color: "#d8534f" }} />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt={login}
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark my-1"
          >
            Visit Github
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username</strong> : {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company</strong> : {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website</strong> : {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={githubContext.repos} />
    </Fragment>
  );
};

export default User;
