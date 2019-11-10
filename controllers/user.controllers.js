const User = require('../models/user.model');

function getUser (request, response) {
    let userId = request.params.userId;

    User.findById(userId, (error, user) => {
        if (error) return response.status(500).send({message: `Error when making the request: ${error}`});
        if (!user) return response.status(404).send({message: 'The user does not exist.'});

        response.status(200).send({ user: user});
    });
}

function getUsers (request, response) {
    User.find({}, (error, users) => {
        if (error) return response.status(500).send({message: `Error when making the request: ${error}`});
        if (!users) return response.status(404).send({message: 'There are no users.'});
        response.status(200).send({users: users});
    });
}

function updateUser (request, response) {
    let userId = request.params.userId;
    let update = request.body;

    User.findByIdAndUpdate(userId, update, (error, user) => {
        if (error) response.status(500).send({message: `Error updating user: ${error}`});

        response.status(200).send({message: 'User updated.', userUpdated: user});
    });
}

function deleteUser (request, response) {
    let userId = request.params.userId;

    User.findById(userId, (error, user) => {
        if (error) response.status(500).send({message: `Error deleting user: ${error}`});

        user.remove(error => {
            if (error) response.status(500).send({message: `Error deleting user: ${error}`});
            
            response.status(200).send({message: 'User deleted.', userDeleted: user});
        })
    })
}

function saveUser (request, response) {
    let user = new User();
    user.name = request.body.name;
    user.password = request.body.password;
    user.email = request.body.email;

    user.save((error, userStored) => {
        error ? response.status(500).send({message: `Error at save in database: ${error}`})
              : response.status(200).send({user: userStored, message: 'Successfully registered!'});
    })
}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    saveUser
}