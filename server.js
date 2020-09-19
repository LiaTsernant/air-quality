const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const https = require('https');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
  const options = {
    hostname: 'www.airnowapi.org',
    path: `/aq/observation/zipCode/current/?format=application/json&zipCode=94080&distance=25&API_KEY=${API_KEY}`,
    method: 'GET'
  };

  const request = https.request(options, resp => {
    let data = "";

    resp.on('data', d => {
      data += d;
    });

    resp.on('end', () => {
      res.send(data)
    });
  });

  request.on('error', error => {
    console.error(error);
  });

  request.end();
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));