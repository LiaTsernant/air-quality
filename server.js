const mongoose = require('mongoose');
// require('dotenv').config();
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './sample.env' });

process.on('uncaughtException', err => {
  console.log('Uncaught Exception')
  console.log(err.name, err.message);
  process.exit(1);
})

// SERVER START
const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
});


//*Prod Database Connection //*
let DB;
if (process.env.NODE_ENV === 'production') {
    DB = process.env.DATABASE.replace(
        '<PASSWORD>',
        process.env.DATABASE_PASSWORD
    );
} else
    DB = process.env.DATABASE_LOCAL;
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB connection Successfull');
    });

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLE rejection Shutting DOWN');
    server.close(() => {
        process.exit(1);
    })
})
process.on('SIGTERM', () => {
    console.log('SIGTERM received Shutting DOWN Application slowly');
    server.close(() => {
        console.log('Process Terminated');
    })
})

// // New route to call API using city_name by AldoTu
// app.get('/api/v1/get_by_city_name/:city_name', (req, res) => {

//   if (req.params.city_name) {

//     const zip_code = getZipCode(req.params.city_name);
//     zip_code.exec((err, result) => {
//       if (err){
//         return console.log(err);
//       }
//       console.log(result);
//       const options = {
//         hostname: 'www.airnowapi.org',
//         path: `/aq/observation/zipCode/current/?format=application/json&zipCode=${result.zip}&distance=25&API_KEY=${process.env.API_KEY}`,
//         method: 'GET'
//       };

//       const request = https.request(options, resp => {
//         let dataStr = "";

//         resp.on('data', d => {
//           dataStr += d;
//         });

//         //Send status and recult to the frontend part
//         resp.on('end', () => {
//           let dataArr = JSON.parse(dataStr);

//           res.status(200).json({ status: 200, record: dataArr })
//         });
//       });

//       request.on('error', error => {
//         console.error(error);
//       });

//       request.end();
//     });
//   }else {
//     return res.status(400).json({ status: 400, message: "Zip Code Required" })
//   }
// });

// // Function to retrieve zip_code from DB given a city_name.
// function getZipCode(city_name){
//   const query = db.CityArea.findOne({
//     $text:
//       {
//         $search: city_name,
//         $caseSensitive: false
//       }
//     },
//     {zip: 1}
//   );
//   return query;
// }



//     request.on('error', error => {
//       console.error(error);
//     });

//     request.end();
//     return;
//   }

//   res.status(400).json({ status: 400, message: "Zip Code Required" })
// });

// app.get('/api/v1/dbRecords', (req, res) => {
//   db.AirQuality.find({}, (err, foundRecords) => {
//     if (err) {
//       return console.log(err);
//     }

//     res.send(foundRecords);
//   });
// });

// app.get('/api/v1/southSanFranciscoRecord', (req, res) => {
//   db.AirQuality.findOne({ ReportingArea: "San Francisco"}, (err, foundRecords) => {
//     if (err) {
//       return console.log(err);
//     }
    
//     res.send(foundRecords);
//   });
// });

// // Show main page
// app.use('/', (req, res) => {
//   res.sendFile('public/views/index.html', {
//     root: __dirname
//   });
// });

// app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));
