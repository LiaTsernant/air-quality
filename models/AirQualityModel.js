const mongoose = require('mongoose');

const AirQualitySchema = new mongoose.Schema({
  ReportingArea: String,
  ParticulateMatter: Number,
  O3: Number,
}, { timestamps: true });

module.exports = mongoose.model('AirQuality', AirQualitySchema);