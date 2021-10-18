import React from "react";

const Alert = ({ msg, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      <ion-icon name="alert-circle"></ion-icon> {msg}
    </div>
  );
};

export default Alert;
