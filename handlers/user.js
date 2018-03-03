const constants = require('../config/constants');

const UserConnect = (socket) => {
  console.log('User connected');
  clients.forEach(client => {
    socket.emit(constants.USER_LOGGED_IN, client);
    console.log('User name ' + client.name + ' is connected');
  });
};

const UserInfo = (socket, data) => {
  let currentUser = {
    id: socket.id,
    name: data.name,
    message: data.message
  };
  clients.push(currentUser);
  console.log('Player logged in.' + currentUser.name);
  console.log('Player message.' + currentUser.message);
  socket.emit(constants.USER_LOGGED_IN, currentUser);
  socket.broadcast.emit(constants.USER_LOGGED_IN, currentUser);
};

const UserOptions = (socket, data) => {
  const currentUser = findUserByID(socket.id);
  console.log(currentUser);
  console.log(data);
};

const findUserByID = (id) => {
  return clients.find((client) => client.id === id);
};

module.exports = { UserConnect, UserInfo, UserOptions };