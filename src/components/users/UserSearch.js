import React, { useState, useContext } from "react";
import Alert from "../layout/Alert";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const UserSearch = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alertContext.setAlert({
        msg: "Please input something...",
        type: "light",
      });
    } else {
      githubContext.userSearch(text);
      setText("");
    }
  };

  const onChange = (event) => setText(event.target.value);

  return (
    <div>
      {alertContext.state !== null && (
        <Alert msg={alertContext.state.msg} type={alertContext.state.type} />
      )}
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
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default UserSearch;
