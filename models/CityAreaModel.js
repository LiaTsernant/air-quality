const mongoose = require('mongoose');

const CityAreaSchema = new mongoose.Schema({
  zip: String,
  city: {
    type: String,
    index: true
  }
}, { timestamps: true });
CityAreaSchema.index({ city: 'text' });
const CityArea= mongoose.model('CityArea', CityAreaSchema);
module.exports = CityArea;