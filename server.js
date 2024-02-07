// const express =require("express");
// const path=require("path");
// const app =express();
// const server=require("http").createServer(app);
// const io=require("http").createServer(app);

// app.use(express.static(path.join(__dirname+"/public")));

// io.on("connection", function(socket){
//     socket.on("newuser",function(username){
//         socket.broadcast.emit("update",username + " joined the conversation");
//     });
//     socket.on("exituser",function(username){
//         socket.broadcast.emit("update",username + " left the conversation");
//     });
//     socket.on("chat",function(message){
//         socket.broadcast.emit("chat",message );
//     });
// });
// server.listen(5000);
//-----------------------------------------------------------
// const express = require("express");
// const path = require("path");
// const app = express();
// const server = require("http").createServer(app);
// const io = require("socket.io")(server); // Create Socket.IO server using the HTTP server

// // Set up static file serving
// app.use(express.static(path.join(__dirname+ "/public")));

// io.on("connection", function(socket) {
//     socket.on("newuser", function(username) {
//         socket.broadcast.emit("update", username + " joined the conversation");
//     });
//     socket.on("exituser", function(username) {
//         socket.broadcast.emit("update", username + " left the conversation");
//     });
//     socket.on("chat", function(message) {
//         socket.broadcast.emit("chat", message);
//     });
// });

// server.listen(5000, () => {
//     console.log("Server running on port 5000");
// });

const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server); // Create Socket.IO server using the HTTP server

// Set up static file serving
app.use(express.static(path.join(__dirname, "/public")));

io.on("connection", function(socket) {
    socket.on("newuser", function(username) {
        socket.broadcast.emit("update", username + " joined the conversation");
    });
    socket.on("exituser", function(username) {
        socket.broadcast.emit("update", username + " left the conversation");
    });
    socket.on("chat", function(message) {
        socket.broadcast.emit("chat", message);
    });
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});
