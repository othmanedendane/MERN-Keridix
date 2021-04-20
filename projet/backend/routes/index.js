const express = require('express');
const routes = express.Router();
const { workers } = require('../controllers/index');
const { login } = require('../controllers/index');
const { admins } = require('../controllers/index');
const { adminlogin } = require('../controllers/index');


routes.get("/", workers, admins);
routes.post("/login1", login);
//routes.get("/", admins);
routes.post("/adminlogin", adminlogin);


module.exports = routes;