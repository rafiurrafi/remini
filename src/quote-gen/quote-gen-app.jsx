import { useEffect } from "react";
import { useState } from "react";
import UserInfo from "./user-info/user-info.component";

const QuoteGenApp = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
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
      });
  }
  return (
    <div>
      <h1>Quote gen app</h1>
      {!loading ? <UserInfo user={user} /> : <h2>Loading...</h2>}
      <button onClick={generateUser}>Get another user</button>
    </div>
  );
};

export default QuoteGenApp;
