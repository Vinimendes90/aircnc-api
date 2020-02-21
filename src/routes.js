const express  = require('express');
const SessionController = require('./app/controllers/SessionController');
const SpotController = require('./app/controllers/SpotController');
const DashboardController = require('./app/controllers/DashboardController');
const BookingController = require('./app/controllers/BookingController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const uploads = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', uploads.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes