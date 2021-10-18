import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const UserSearch = ({ setAlert, clearUsers }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      setAlert({ msg: "Please input something...", type: "light" });
    } else {
      githubContext.userSearch(text);
      setText("");
    }
  };

  const onChange = (event) => setText(event.target.value);

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search user..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

UserSearch.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default UserSearch;
