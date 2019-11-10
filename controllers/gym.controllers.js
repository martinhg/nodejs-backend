const Gym = require('../models/gym.model');

function getGym (request, response) {
    let gymId = request.params.gymId;

    Gym.findById(gymId, (error, gym) => {
        if (error) return response.status(500).send({message: `Error when making the request: ${error}`});
        if (!gym) return response.status(404).send({message: 'The gym does not exist.'});

        response.status(200).send({ gym: gym});
    });
}

function getGyms (request, response) {
    Gym.find({}, (error, gyms) => {
        if (error) return response.status(500).send({message: `Error when making the request: ${error}`});
        if (!gyms) return response.status(404).send({message: 'There are no gyms.'});
        response.status(200).send({gyms: gyms});
    });
}

function updateGym (request, response) {
    let gymId = request.params.gymId;
    let update = request.body;

    Gym.findByIdAndUpdate(gymId, update, (error, gym) => {
        if (error) response.status(500).send({message: `Error updating gym: ${error}`});

        response.status(200).send({message: 'Gym updated.', userUpdated: gym});
    });
}

function deleteGym (request, response) {
    let gymId = request.params.gymId;

    Gym.findById(gymId, (error, gym) => {
        if (error) response.status(500).send({message: `Error deleting gym: ${error}`});

        gym.remove(error => {
            if (error) response.status(500).send({message: `Error deleting gym: ${error}`});
            
            response.status(200).send({message: 'Gym deleted.', userDeleted: gym});
        })
    })
}

function saveGym (request, response) {
    let gym = new Gym();
    gym.name = request.body.name;
    gym.owner = request.body.owner;
    gym.email = request.body.email;
    gym.phoneNumber = request.body.phoneNumber;
    gym.address = request.body.address;
    gym.status = request.body.status;
    gym.customers = request.body.customers;

    gym.save((error, userStored) => {
        error ? response.status(500).send({message: `Error at save in database: ${error}`})
              : response.status(200).send({gym: userStored, message: 'Successfully registered!'});
    })
}

module.exports = {
    getGym,
    getGyms,
    updateGym,
    deleteGym,
    saveGym
}