const router = require('express').Router();
const { getUsers, addUser } = require('../../controllers/userController');
router
.route('/')
.get(getUsers)
.post(addUser);

module.exports = router;