# Air Quality App
![Air QUality](assets/airquality.gif)
https://air-quality-data-app.herokuapp.com/

Designed and implemented an app that allows users to see current air quality in San Francisco Area.

Integrated with AirNow API for displaying most recent data.

## Tech:
* AirNow API,
* MongoDB,
* Express,
* Node,
* HTML / CSS,
* [Particles.js](https://vincentgarreau.com/particles.js/)

## Decicions made:
* Create server:
  * Version1: for being able to store my api key I decided to create a server that proxies the request to the original server.
  * Version 2: add a cron like task scheduler for grabbing a recent information and storing it to the database.
* Use upsert: instead of iterating over records and see if a record already exists, I decided to use MongoDB upsert. Method will update a record if already exists, otherwise create a new record.

```javascript
db.AirQuality.updateOne({ ReportingArea: newDBRecord.ReportingArea }, newDBRecord, { upsert: true }, (err, updatedRecord) => {
  if (err) {
    return console.log(err);
  }
  res.status(200).json({ status: 200, message: 'instance created', recordupdatedRecord })
})
```
* Use node HTTPS module in the standard library: too many external modules increase a chance of bugs. I decided to explore native node methods.

```javascript
app.get('/link', (req, res) => {
  const options = {
    //hostname, path and type of the request
  };

  const request = https.request(options, resp => {
    let dataStr = "";

    resp.on('data', d => {
      //store chunk of data into a string variable
    });

    resp.on('end', () => {
      //create db instance and send status
    });
  });

  request.on('error', error => {
    //handle error
  });

  request.end();
});
```
Alternative tried - axios.

* Use particles.js: I really liked this lightweight JavaScript library for creating particles. It is a very user friendly library that helps to achieve a great result.

## Link
https://air-quality-data-app.herokuapp.com/

## Next plans:
* Add more cities.
* Switch to React for reusing the same components.