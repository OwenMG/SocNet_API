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
    getUser(req,res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then(async (user) => 
            !user
                ? res.status(404).json({ message: 'No matching user found'})
                : res.json({user})
            )
        .catch((err) => {
            console.err(err);
            return res.status(500).json(err);
        })
    },
    updateUser(req,res) {
        User.findOneAndUpdate({ _id: req.params.userId }, body, { new: true, runValidators: true })
        .then((user) => {
            !user
                ? res.status(404).json({ message: 'No matching user to update'})
                : res.json({ message: 'user updated'})
        })
        .catch((err) => {
            console.err(err);
            return res.status(500).json(err);
        })
    }
}
