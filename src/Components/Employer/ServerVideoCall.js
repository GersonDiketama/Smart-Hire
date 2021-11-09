// const express = require("express")
// const http = require("http")
// const app = express()
// const server = http.createServer(app)
// const io = require("socket.io")(server, {

//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"]
//     }
// })

// //Connect the call
// io.on("connection", (socket) => {socket.emit("hey", socket.id)})

// //end the call
// socket.on("disconnect", () => {socket.broadcast.emit("callEnded")})

// //Call user
// socket.on("callUser", (data) =>{io.to(data.userToCall).emit("callUser", {signal: data.signalData, from: data.from, name: data.name})})

// //Answer the call

// socket.on("answerCall", (data) => {io.to(data.userToCall).emit("callAccepted", data.signal)})
 
// server.listen(3000, () => console.log("server running on port 3000")) 

const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

const users = {};

io.on('connection', socket => {
    if (!users[socket.id]) {
        users[socket.id] = socket.id;
    }
    socket.emit("yourID", socket.id);
    io.sockets.emit("allUsers", users);
    socket.on('disconnect', () => {
        delete users[socket.id];
    })

    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit('hey', {signal: data.signalData, from: data.from});
    })

    socket.on("acceptCall", (data) => {
        io.to(data.to).emit('callAccepted', data.signal);
    })
});

server.listen(3000, () => console.log('server is running on port 3000'));