const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const WebSocket = require("ws");

app.use(express.static("public"));

// Create a WebSocket server instance by passing the HTTP server object
const wss = new WebSocket.Server({ server });

// Event listener for when a WebSocket connection is established
wss.on("connection", (ws) => {
  console.log("Client connected");

  // Event listener for messages received from clients
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(`${message}`);
      }
    });
  });

  // Event listener for when a client disconnects
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
