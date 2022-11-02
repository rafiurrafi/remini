import { useEffect } from "react";
import { useState } from "react";

const QuoteGenApp = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    generateUser();
  }, []);
  function generateUser() {
    const randomId = Math.floor(Math.random() * 10);
    fetch("https://jsonplaceholder.typicode.com/users/" + randomId)
      .then((response) => response.json())
      .then((user) => setUser(user));
  }
  return (
    <div>
      <h1>Quote gen app</h1>
      {user ? <h1>User</h1> : <h2>No user found</h2>}
    </div>
  );
};

export default QuoteGenApp;
