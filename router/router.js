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

app.get('/', controller.getHome);

//Driver Routes
app.get('/driver', controller.getDriver);
app.get('/driver/:id', controller.getDriverById);
app.post('/driver', controller.addDriver);
app.delete('/driver/:id', controller.delDriver);
app.put('/driver/:id', controller.putDriver);

//Body Routes
app.get('/body', controller.getBody);
app.get('/body/:id', controller.getBodyById);
app.post('/body', controller.addBody);
app.delete('/body/:id', controller.delBody);
app.put('/body/:id', controller.putBody);

//Tire Routes
app.get('/tire', controller.getTire);
app.get('/tire/:id', controller.getTireById);
app.post('/tire', controller.addTire);
app.delete('/tire/:id', controller.delTire);
app.put('/tire/:id', controller.putTire);

//Glider Routes
app.get('/glider', controller.getGlider);
app.get('/glider/:id', controller.getGliderById);
app.post('/glider', controller.addGlider);
app.delete('/glider/:id', controller.delGlider);
app.put('/glider/:id', controller.putGlider);

//Driver Model Routes
app.get('/driverModel', controller.getDriverModel);
app.get('/driverModel/:id', controller.getDriverModelById);
app.post('/driverModel', controller.addDriverModel);
// app.delete('/driverModel/:id', controller.delDriverModel);
app.put('/driverModel/:id', controller.putDriverModel);

module.exports = { app };