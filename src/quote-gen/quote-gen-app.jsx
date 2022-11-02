import { useEffect } from "react";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setLoading } from "./store/data/data.action";
import UserInfo from "./user-info/user-info.component";

const QuoteGenApp = () => {
  const dispatch = useDispatch();
  const { user, color, loading } = useSelector((state) => state.data);
  useEffect(() => {
    generateUser();
  }, []);
  function generateUser() {
    dispatch(setLoading(true));
    const randomId = Math.floor(Math.random() * 9) + 1;
    fetch("https://jsonplaceholder.typicode.com/users/" + randomId)
      .then((response) => response.json())
      .then((user) => {
        dispatch(
          setCurrentUser({ user, loading: false, color: getRandomColor() })
        );
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
