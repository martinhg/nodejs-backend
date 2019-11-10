const GymControllers = require('../controllers/gym.controllers');
const express = require('express');
const api = express.Router();

api.get('/gyms/gym/:gymId', GymControllers.getGym);
api.get('/gyms', GymControllers.getGyms);
api.delete('/gyms/gym/:gymId', GymControllers.deleteGym);
api.put('/gyms/gym/:gymId', GymControllers.updateGym);
api.post('/gyms/gym', GymControllers.saveGym);

module.exports = api