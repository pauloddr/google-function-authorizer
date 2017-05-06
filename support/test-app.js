'use strict';

require('../config/test');

const GoogleFunctionAuth = require('../index');

const expressApp = require('express')();
const bodyParser = require('body-parser');
expressApp.use(bodyParser.json());

expressApp.all('/all', function (req, res) {
  GoogleFunctionAuth.all(req, res);
});

expressApp.post('/create', function (req, res) {
  GoogleFunctionAuth.create(req, res);
});

expressApp.post('/signin', function (req, res) {
  GoogleFunctionAuth.signin(req, res);
});

expressApp.get('/ping', function (req, res) {
  GoogleFunctionAuth.ping(req, res);
});

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

module.exports = chai.request.agent(expressApp);
