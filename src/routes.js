const express = require('express');
const routes = express.Router();

const userController = require('./controller/userController');

routes.post('/UserCreate',userController.create);
routes.get('/UserCreate',userController.showAll);
routes.get('/Login',userController.login);

module.exports = routes;
