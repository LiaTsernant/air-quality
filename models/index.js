const mongoose = require('mongoose');
require('dotenv').config();
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/airQuality';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(err));

module.exports = {
  AirQuality: require('./AirQualityModel'),
  CityArea: require('./CityAreaModel'),
};