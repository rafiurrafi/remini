import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import ContextProvider from "./dashboard/contexts/state.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
