const { ObjectID } = require('mongoose').Types;
const { User } = require('../models');
module.exports = {
    getUsers(req, res) {
    User.find()
    .then(userData => res.json(userData))
    .catch((err) => {
        console.err(err);
        return res.status(500).json(err);
        })
    },
    addUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    },
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No such user exists' })
                : res.json({ message: 'Successfully removed user.'})
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

}
