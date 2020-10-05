const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;
const https = require('https');
const db = require('./models');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/v1/update', (req, res) => {
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

      db.AirQuality.updateOne({ ReportingArea: newDBRecord.ReportingArea }, newDBRecord, { upsert: true }, (err, updatedRecord) => {

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
});

app.get('/api/v1/get_by_zip_code/:zip_code', (req, res) => {
  if (req.params.zip_code) {
    const options = {
      hostname: 'www.airnowapi.org',
      path: `/aq/observation/zipCode/current/?format=application/json&zipCode=${req.params.zip_code}&distance=25&API_KEY=${process.env.API_KEY}`,
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
    return;
  }

  res.status(400).json({ status: 400, message: "Zip Code Required" })
});

app.get('/api/v1/dbRecords', (req, res) => {
  db.AirQuality.find({}, (err, foundRecords) => {
    if (err) {
      return console.log(err);
    }

    res.send(foundRecords);
  });
});

app.get('/api/v1/southSanFranciscoRecord', (req, res) => {
  db.AirQuality.findOne({ ReportingArea: "San Francisco"}, (err, foundRecords) => {
    if (err) {
      return console.log(err);
    }
    
    res.send(foundRecords);
  });
});

// Show main page
app.use('/', (req, res) => {
  res.sendFile('public/views/index.html', {
    root: __dirname
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));
