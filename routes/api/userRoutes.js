const router = require('express').Router();
const { getUsers, getUser, addUser, deleteUser } = require('../../controllers/userController');

router
.route('/')
.get(getUsers)
.post(addUser);

router
.route('/:userId')
.get(getUser)
.delete(deleteUser)

module.exports = router;