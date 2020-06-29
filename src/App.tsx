import React from "react";
import Users from "./components/users/users";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="left">
        <Users />
      </div>

      <div className="right">Chat</div>
    </div>
  );
}
