const express = require('express');
const routes = express.Router();
const { admins } = require('../controllers/indeq');
const { adminlogin } = require('../controllers/indeq');


routes.get("/", admins);
routes.post("/adminlogin", adminlogin);


module.exports = routes;