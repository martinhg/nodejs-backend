const UserControllers = require('../controllers/user.controllers');
const express = require('express');
const api = express.Router();

api.get('/users/user/:userId', UserControllers.getUser);
api.get('/users', UserControllers.getUsers);
api.delete('/users/user/:userId', UserControllers.deleteUser);
api.put('/users/user/:userId', UserControllers.updateUser);
api.post('/users/user', UserControllers.saveUser);

module.exports = api