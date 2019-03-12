const yargs = require('yargs');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { Driver } = require('./models/user');
const ObjectID = mongoose.Types.ObjectId;

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

//driver
app.get('/driver', (req, res) => Driver.find(drivers).then(drivers => res.json(drivers)).catch(err, res.status(500).send(err)));

app.get('/driver/:id', (req, res) => ObjectID.isValid(req.params.id) ? Driver.findById(req.params.id).then(driver => driver ? res.json(driver) : res.status(404).send()) : res.status(404).send());

app.post('/driver', (req, res) => new Driver({ name:req.body.name, size:req.body.size, driverModel:req.body.driverModel }).save().then(driver => res.send(driver)).catch(err => res.status(500).send(err)));

app.delete('/driver/:id', (req, res) => ObjectID.isValid(req.params.id) ? Driver.findByIdAndRemove(req.params.id).then(driver => driver ? res.json(driver) : res.status(404).send()) : res.status(404).send());

const port = yargs.argv.port && !isNaN(yargs.argv.port) && yargs.argv.port > 0 && !(yargs.argv.port % 1) ? yargs.argv.port : 3000;
app.listen(port, () => console.log("Server listen on port ", port));