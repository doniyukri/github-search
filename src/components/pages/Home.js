import React, { Fragment } from "react";
import Users from "../users/Users";
import UserSearch from "../users/UserSearch";

const Home = () => (
  <Fragment>
    <div className="container">
      <UserSearch />
      <Users />
    </div>
  </Fragment>
);

export default Home;
