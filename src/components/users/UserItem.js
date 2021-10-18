import React from "react";
import { Link } from "react-router-dom";

function UserItem(props) {
  const { login, avatar_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={`${login} profile`}
        className="round-img"
        style={{ width: "60px" }}
      ></img>
      <p>{login}</p>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
