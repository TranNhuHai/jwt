'use strict';
const express = require('express');
const router = express.Router();
const AuMiddleWare = require('./middleWare/AuMiddleWare');
const Authentication = require('./middleWare/Authentication');
const UserController = require('./controllers/UserController');

const routes = (app) => {
    router.post('/login', Authentication.login());
    router.post('/refresh-token', Authentication.refreshToken());
    router.use(AuMiddleWare.isAuth);
    router.get('/users', UserController.getUsers);
    return app.use('/', router);
}

module.exports = routes;
