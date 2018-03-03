const constants = require('../config/constants');

const SocketDisconnect = (socket) => {
  const currentUser = findUserByID(socket.id);
  if (!clients.length) {
    return;
  }
  console.log('Player disconnected ' + currentUser.name);
  socket.broadcast.emit(constants.USER_DISCONNECTED, currentUser);
  clients = clients.filter(client => client.name != currentUser.name);
};

const findUserByID = (id) => {
  return clients.find((client) => client.id === id);
};

module.exports = { SocketDisconnect };