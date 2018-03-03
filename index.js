const constants = require('./config/constants');
const express = require('express');
const handlers = require('./handlers');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.set('port', process.env.PORT || 3000);

clients = [];

server.listen(app.get('port'), function () {
    console.log('************ SERVER STARTED ************');
});

io.on(constants.SOCKET_CONNECT, (socket) => {
    socket.on(constants.USER_CONNECT, () => handlers.UserConnect(socket));
    socket.on(constants.USER_INFO, (data) => handlers.UserInfo(socket, data));
    socket.on(constants.USER_OPTIONS, (data) => handlers.UserOptions(socket, data));
    socket.on(constants.SOCKET_DISCONNECT, () => handlers.SocketDisconnect(socket));
});