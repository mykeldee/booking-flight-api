const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)

router.post('/book_flight', controller.bookFlight)

router.get('/get_flight/:id', controller.getFlight)

router.get('/get_all_flight/', controller.getAllFlight)

router.put('/edit_flight/:id', controller.editFlight)

router.delete('/delete_flight/:id', controller.deleteFlight)

module.exports = router;

