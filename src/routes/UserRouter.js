const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();
router.post('/users_login', UserController.userLogin);
router.get('/', UserController.getAllUsers);
router.get('/user/:id', UserController.getOneUser);

module.exports = router;




