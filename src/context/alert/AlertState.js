import { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const GithubState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // set alert
  const setAlert = (alert) => {
    dispatch({ type: SET_ALERT, payload: alert });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  return (
    <AlertContext.Provider value={{ state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default GithubState;
