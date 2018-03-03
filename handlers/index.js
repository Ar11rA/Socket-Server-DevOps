const userHandlers = require('./user');
const socketHandlers = require('./socket');

module.exports = { ...userHandlers, ...socketHandlers };