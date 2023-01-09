import { useState } from "react";

const TodoApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  function handleChange(e) {
    setSearchQuery(e.target.value);
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      console.log("Done");
    }
  }
  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default TodoApp;
