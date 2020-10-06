const https = require('https');
const AirQuality=require('../models/AirQualityModel')
const CityArea=require('../models/CityAreaModel')
exports.getAirQualityDataByZipCode = async(req, res, next) => {
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
        return 
    }
    res.status(400).json({ status: 400, message: "Zip Code Required" })
};

exports.updateData=async(req,res,next)=>{
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

exports.getDataFromDb=async(req,res,next)=>{
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

exports.getSouthSanFranciscoRecord=async(req,res,next)=>{
    try {
        AirQuality.findOne({ ReportingArea: "San Francisco"}, (err, foundRecords) => {
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