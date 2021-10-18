import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="container">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#333333" }}
      >
        <div className="card">
          <ul>
            <li>
              <strong>{repo.name}</strong>
            </li>
            <li>
              <p>{repo.description}</p>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};

RepoItem.propTpes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
