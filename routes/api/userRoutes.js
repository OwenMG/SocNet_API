const router = require('express').Router();
const { getUsers, getUser, addUser, deleteUser, updateUser } = require('../../controllers/userController');

router
.route('/')
.get(getUsers)
.post(addUser);

router
.route('/:userId')
.get(getUser)
.delete(deleteUser)
.put(updateUser);

module.exports = router;