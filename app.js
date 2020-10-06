const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const xss=require('xss-clean')
const compression=require('compression')
const mongoSanitize=require('express-mongo-sanitize');
const viewRouter=require('./routes/viewRouter');
const airQuality=require('./routes/airQualityRouter');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//Implementing CORS
app.use(cors());
//When we request any patch,delete or Put methode then this optios is send by the browser so in that response we need to set allow-cross-origin-request
// to true
app.options('*',cors());

//DATA sanitization agaist Nosql query injection
app.use(mongoSanitize())

//Data sanitization agaist XSS
app.use(xss())

//To compression data in response of all the api
app.use(compression())


app.use('/api/v1',airQuality)
app.use('/',viewRouter)

module.exports = app;