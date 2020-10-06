const express = require('express');
const router = express.Router();
const airController=require('../controllers/airController');
const { route } = require('./viewRouter');

router
    .route('/get_by_zip_code/:zip_code')
    .get(airController.getAirQualityDataByZipCode)

router
    .route('/update')
    .get(airController.updateData)

router
    .route('/api/v1/dbRecords')
    .get(airController.getDataFromDb)
router
    .route('/api/v1/southSanFranciscoRecord')
    .get(airController.getSouthSanFranciscoRecord)

module.exports = router;