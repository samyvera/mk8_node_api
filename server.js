const yargs = require('yargs');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { Driver } = require('./models/driver');
const ObjectID = mongoose.Types.ObjectId;

const app = express();

app.use(bodyParser.json());

app.post('/driver', (req, res) => new Driver({ name:req.body.name, size:req.body.size, driverModel:req.body.driverModel }).save().then(Driver => res.send(Driver)).catch(err => res.status(500).send(err)));

app.get('/user', (req, res) => User.find((err, users) => res.json(users)));

app.get('/user/:id', (req, res) => ObjectID.isValid(req.params.id) ? User.findById(req.params.id).then(user => user ? res.json(user) : res.status(404).send()) : res.status(404).send());

app.delete('/user/:id', (req, res) => ObjectID.isValid(req.params.id) ? User.findByIdAndRemove(req.params.id).then(user => user ? res.json(user) : res.status(404).send()) : res.status(404).send());

const port = yargs.argv.port && !isNaN(yargs.argv.port) && yargs.argv.port > 0 && !(yargs.argv.port % 1) ? yargs.argv.port : 3000;
app.listen(port, () => console.log("Server listen on port ", port));