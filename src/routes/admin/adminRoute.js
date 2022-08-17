const express = require('express');

const { adminController } = require('../../controllers/admin/adminControler');

const adminRoute = express.Router();

adminRoute.get('/get_students',adminController);

exports.adminRoute = adminRoute;