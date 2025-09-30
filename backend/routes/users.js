const express = require('express');
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { auth, admin } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(auth, admin, getUsers);

router.route('/:id')
  .get(auth, admin, getUserById)
  .put(auth, admin, updateUser)
  .delete(auth, admin, deleteUser);

module.exports = router;