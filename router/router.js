//Import dependencies
const express = require('express');
const bodyParser = require('body-parser');

//import modules
const controller = require('../controller/controller');

//Start routing
const app = express();
app.use(bodyParser.json());

/*
model
GET model
GET model/id
POST model
DELETE model/id
PUT model/id
*/

//Driver Routes
app.get('/driver', controller.getDriver);
app.get('/driver/:id', controller.getDriverById);
app.post('/driver', controller.addDriver);
app.delete('/driver/:id', controller.delDriver);

//Body Routes
app.get('/body', controller.getBody);
app.get('/body/:id', controller.getBodyById);
app.post('/body', controller.addBody);
app.delete('/body/:id', controller.delBody);

//Tire Routes
app.get('/tire', controller.getTire);
app.get('/tire/:id', controller.getTireById);
app.post('/tire', controller.addTire);
app.delete('/tire/:id', controller.delTire);

//Glider Routes
app.get('/glider', controller.getGlider);
app.get('/glider/:id', controller.getGliderById);
app.post('/glider', controller.addGlider);
app.delete('/glider/:id', controller.delGlider);

module.exports = { app };