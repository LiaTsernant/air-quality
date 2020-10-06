const mongoose = require('mongoose');

const AirQualitySchema = new mongoose.Schema({
  ReportingArea: String,
  ParticulateMatter: Number,
  Ozone: Number,
}, { timestamps: true });

const AirQuality= mongoose.model('AirQuality', AirQualitySchema);
module.exports = AirQuality