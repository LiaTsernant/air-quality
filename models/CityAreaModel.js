const mongoose = require('mongoose');

const CityAreaSchema = new mongoose.Schema({
  zip: String,
  city: {
    type: String,
    index: true
  }
}, { timestamps: true });
CityAreaSchema.index({ city: 'text' });
module.exports = mongoose.model('CityArea', CityAreaSchema);