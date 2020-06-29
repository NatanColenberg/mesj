import React, { useState } from "react";
import io from "socket.io-client";
import "./connection.css";

import { TextField, Button } from "@material-ui/core";

export default function Connection() {
  const [userName, SetUserName] = useState("");

  const connect = () => {
    // const socket = io("http://localhost", {
    //   path: "/ws",
    //   reconnectionAttempts: 3,
    //   reconnectionDelay: 1000,
    //   port: "8080",
    // });
    // console.log("socket.connected: ", socket.connected);

    const socket = new WebSocket("ws://localhost:8080/ws");
    console.log("Attempting Connection...");

    socket.onopen = () => {
      console.log("Successfully Connected!");
      socket.send("Hi From Client");
    };

    socket.onclose = () => {
      console.log("Connection Closed");
    };

    socket.onerror = (err) => {
      console.log("Socket Error: ", err);
    };
  };
  return (
    <div className="connection-wrap">
      <TextField
        id="time"
        type="text"
        label="User Name"
        value={userName}
        onChange={(e) => SetUserName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={!userName}
        onClick={connect}
      >
        Connect
      </Button>
    </div>
  );
}
