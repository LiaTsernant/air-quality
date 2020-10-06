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