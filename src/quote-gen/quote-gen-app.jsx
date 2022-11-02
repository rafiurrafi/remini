import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import UserInfo from "./user-info/user-info.component";

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return { ...state, ...payload };
    case "TOGGLE_LOADING":
      return { ...state, loading: payload };

    default:
      throw new Error(`Unhandled action type ${type}`);
  }
}

const initialState = {
  user: null,
  loading: true,
  color: "",
};

const QuoteGenApp = () => {
  const [{ user, loading, color }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    generateUser();
  }, []);
  function generateUser() {
    dispatch({ type: "TOGGLE_LOADING", payload: true });
    const randomId = Math.floor(Math.random() * 9) + 1;
    fetch("https://jsonplaceholder.typicode.com/users/" + randomId)
      .then((response) => response.json())
      .then((user) => {
        dispatch({
          type: "SET_USER",
          payload: { user, loading: false, color: getRandomColor() },
        });
      });
  }
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  return (
    <div style={{ backgroundColor: color }}>
      <h1>Quote gen app</h1>
      {!loading ? <UserInfo user={user} /> : <h2>Loading...</h2>}
      <button onClick={generateUser}>Get another user</button>
    </div>
  );
};

export default QuoteGenApp;
