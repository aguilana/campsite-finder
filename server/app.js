const express = require('express');
const path = require('path');
const cors = require('cors');
const volleyball = require('volleyball');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(cors());

// logging middleware
app.use(volleyball);
// app.use(morgan('dev'))

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // can put a secret in the ()

// session
const sessionOptions = {
  secret: 'secret', // can be anything
  resave: false, // don't resave if nothing changed
  saveUninitialized: true, // save even if nothing is stored
  cookie: {
    httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week
    maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  },
};
app.use(session(sessionOptions));

/* app.get('/server-side/viewcount', (req, res) => {
  // req.session is stored server-side and can add anything to the session...
  console.log('VIEWED!');
  req.session.count ? req.session.count++ : (req.session.count = 1);
  console.log('REQ: ', req.session.count);
  res.send(
    `you have viewed ${req.session.count} ${
      req.session.count > 1 ? 'times' : 'time'
    }`
  );
}); */

app.use('/api', require('./api'));
app.use('/auth', require('./auth'));

// send index.html for any other requests
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
