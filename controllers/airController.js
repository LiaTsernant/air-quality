const https = require('https');
const AirQuality = require('../models/AirQualityModel');
const CityArea = require('../models/CityAreaModel');

exports.getAirQualityDataByZipCode = async (req, res, next) => {
  if (req.params.zipCode) {
    const options = {
      hostname: 'www.airnowapi.org',
      path: `/aq/observation/zipCode/current/?format=application/json&zipCode=${req.params.zipCode}&distance=25&API_KEY=${process.env.API_KEY}`,
      method: 'GET'
    };

    const request = https.request(options, resp => {
      let dataStr = "";
      resp.on('data', d => {
        dataStr += d;
      });

      //Send status and recult to the frontend part
      resp.on('end', () => {
        let dataArr = JSON.parse(dataStr);
        res.status(200).json({ status: 200, record: dataArr });
      });
    });

    request.on('error', error => {
      console.error(error);
    });
    request.end();
    return;
  }
  res.status(400).json({ status: 400, message: "Zip Code Required" });
};


// // New route to call API using cityName by AldoTu
exports.getAirQualityDataByCityName = async (req, res, next) => {
  if (req.params.cityName) {
    const zipCode = getZipCode(req.params.cityName);
    zipCode.exec((err, result) => {
      if (err) {
        return console.log(err);
      }
      console.log(result);
      const options = {
        hostname: 'www.airnowapi.org',
        path: `/aq/observation/zipCode/current/?format=application/json&zipCode=${result.zip}&distance=25&API_KEY=${process.env.API_KEY}`,
        method: 'GET'
      };

      const request = https.request(options, resp => {
        let dataStr = "";

        resp.on('data', d => {
          dataStr += d;
        });

        //Send status and recult to the frontend part
        resp.on('end', () => {
          let dataArr = JSON.parse(dataStr);

          res.status(200).json({ status: 200, record: dataArr })
        });
      });

      request.on('error', error => {
        console.error(error);
      });

      request.end();
    });
  } else {
    return res.status(400).json({ status: 400, message: "Zip Code Required" });
  }
}

// Function to retrieve zipCode from DB given a cityName.
function getZipCode(cityName) {
  const query = CityArea.findOne({
    $text:
    {
      $search: cityName,
      $caseSensitive: false
    }
  },
    { zip: 1 }
  );
  console.log(query)
  return query;
}

// Updates data for static version
exports.updateData = async (req, res, next) => {
  const options = {
    hostname: 'www.airnowapi.org',
    path: `/aq/observation/zipCode/current/?format=application/json&zipCode=94080&distance=25&API_KEY=${process.env.API_KEY}`,
    method: 'GET'
  };

  const request = https.request(options, resp => {
    let dataStr = "";
    let newDBRecord = {};

    resp.on('data', d => {
      dataStr += d;
    });

    //create db instance and send status
    resp.on('end', () => {
      let dataArr = JSON.parse(dataStr);
      newDBRecord.ReportingArea = dataArr[0].ReportingArea;
      newDBRecord.ParticulateMatter = dataArr[1].AQI;
      newDBRecord.Ozone = dataArr[0].AQI;

      AirQuality.updateOne({ ReportingArea: newDBRecord.ReportingArea }, newDBRecord, { upsert: true }, (err, updatedRecord) => {

        if (err) {
          return console.log(err);
        }

        res.status(200).json({ status: 200, message: 'instance created', record: updatedRecord })
      })
    });
  });

  request.on('error', error => {
    console.error(error);
  });
  request.end();
}

// All instances in the database for debugging purposes
exports.getDataFromDb = async (req, res, next) => {
  try {
    AirQuality.find({}, (err, foundRecords) => {
      if (err) {
        return console.log(err);
      }
      res.send(foundRecords);
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong'
    });
  }
}

// Static version shows static Db record
exports.getSouthSanFranciscoRecord = async (req, res, next) => {
  try {
    AirQuality.findOne({ ReportingArea: "San Francisco" }, (err, foundRecords) => {
      if (err) {
        console.log(err);
      }
      res.send(foundRecords);
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'error',
      message: 'Something Went Wrong'
    });
  }
}