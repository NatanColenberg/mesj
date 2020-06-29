import React from "react";
import Connection from "./connection/connection";

export default function Users() {
  return (
    <div className="users-wrap">
      <h1>Connect to Chat</h1>
      <Connection />
      <h1>Users</h1>
    </div>
  );
}
