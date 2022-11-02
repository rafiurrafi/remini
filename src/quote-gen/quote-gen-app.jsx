import { useEffect } from "react";
import { useState } from "react";
import UserInfo from "./user-info/user-info.component";

const QuoteGenApp = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState();
  useEffect(() => {
    generateUser();
  }, []);
  function generateUser() {
    setLoading(true);
    const randomId = Math.floor(Math.random() * 9) + 1;
    fetch("https://jsonplaceholder.typicode.com/users/" + randomId)
      .then((response) => response.json())
      .then((user) => {
        setUser(user);
        setLoading(false);
        setColor(getRandomColor());
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
