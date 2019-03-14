//Import dependencies
const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

//import modules
const { Glider } = require('../models/glider');
const { Body } = require('../models/body');
const { Driver } = require('../models/driver');
const { DriverModel } = require('../models/driverModel');
const { Tire } = require('../models/tire');
const { type } = require('../types/types');

//Home Methods
const details = {
    driver: 'http://127.0.0.1:3000/driver/',
    driverModel: 'http://127.0.0.1:3000/driverModel/',
    body: 'http://127.0.0.1:3000/body/',
    tire: 'http://127.0.0.1:3000/tire/',
    glider: 'http://127.0.0.1:3000/glider/'
};
const getHome = (req, res) => res.json(details);

//Driver Methods
const getDriver = (req, res) => Driver.find((err, drivers) => err ? res.status(500).send(err) : res.json(drivers));
const getDriverById = (req, res) => ObjectID.isValid(req.params.id) ? Driver.findById(req.params.id).then(driver => driver ? res.json(driver) : res.status(404).send()) : res.status(404).send();
const addDriver = (req, res) => new Driver(type(req, "driverType")).save().then(driver => res.send(driver)).catch(err => res.status(500).send(err));
const delDriver = (req, res) => ObjectID.isValid(req.params.id) ? Driver.findByIdAndRemove(req.params.id).then(driver => driver ? res.json(driver) : res.status(404).send()) : res.status(404).send();
const putDriver = (req, res) => ObjectID.isValid(req.params.id) ? Driver.findByIdAndUpdate(req.params.id, new Driver(type(req, "driverType"), {new: true})).then(driver => driver ? res.json(driver) : res.status(404).send()) : res.status(404).send();

//Body Methods
const getBody = (req, res) => Body.find((err, bodies) => err ? res.status(500).send(err) : res.json(bodies));
const getBodyById = (req, res) => ObjectID.isValid(req.params.id) ? Body.findById(req.params.id).then(body => body ? res.json(body) : res.status(404).send()) : res.status(404).send();
const addBody = (req, res) => new Body(type(req, "bodyType")).save().then(body => res.send(body)).catch(err => res.status(500).send(err));
const delBody = (req, res) => ObjectID.isValid(req.params.id) ? Body.findByIdAndRemove(req.params.id).then(body => body ? res.json(body) : res.status(404).send()) : res.status(404).send();
const putBody = (req, res) => ObjectID.isValid(req.params.id) ? Body.findByIdAndUpdate(req.params.id, new Body(type(req, "bodyType"), {new: true})).then(body => body ? res.json(body) : res.status(404).send()) : res.status(404).send();

//Tire Methods
const getTire = (req, res) => Tire.find((err, tires) => err ? res.status(500).send(err) : res.json(tires));
const getTireById = (req, res) => ObjectID.isValid(req.params.id) ? Tire.findById(req.params.id).then(tire => tire ? res.json(tire) : res.status(404).send()) : res.status(404).send();
const addTire = (req, res) => new Tire(type(req, "tireType")).save().then(tire => res.send(tire)).catch(err => res.status(500).send(err));
const delTire = (req, res) => ObjectID.isValid(req.params.id) ? Tire.findByIdAndRemove(req.params.id).then(tire => tire ? res.json(tire) : res.status(404).send()) : res.status(404).send();
const putTire = (req, res) => ObjectID.isValid(req.params.id) ? Tire.findByIdAndUpdate(req.params.id, new Tire(type(req, "tireType"), {new: true})).then(tire => tire ? res.json(tire) : res.status(404).send()) : res.status(404).send();

//Glider Methods
const getGlider = (req, res) => Glider.find((err, gliders) => err ? res.status(500).send(err) : res.json(gliders));
const getGliderById = (req, res) => ObjectID.isValid(req.params.id) ? Glider.findById(req.params.id).then(glider => glider ? res.json(glider) : res.status(404).send()) : res.status(404).send();
const addGlider = (req, res) => new Glider(type(req, "gliderType")).save().then(glider => res.send(glider)).catch(err => res.status(500).send(err));
const delGlider = (req, res) => ObjectID.isValid(req.params.id) ? Glider.findByIdAndRemove(req.params.id).then(glider => glider ? res.json(glider) : res.status(404).send()) : res.status(404).send();
const putGlider = (req, res) => ObjectID.isValid(req.params.id) ? Glider.findByIdAndUpdate(req.params.id, new Glider(type(req, "gliderType"), {new: true})).then(glider => glider ? res.json(glider) : res.status(404).send()) : res.status(404).send();

//Glider Methods
const getDriverModel = (req, res) => DriverModel.find((err, driverModels) => err ? res.status(500).send(err) : res.json(driverModels));
const getDriverModelById = (req, res) => ObjectID.isValid(req.params.id) ? DriverModel.findById(req.params.id).then(driverModel => driverModel ? res.json(driverModel) : res.status(404).send()) : res.status(404).send();
const addDriverModel = (req, res) => new DriverModel(type(req, "driverModelType")).save().then(driverModel => res.send(driverModel)).catch(err => res.status(500).send(err));
// const delDriverModel = (req, res) => ObjectID.isValid(req.params.id) ? DriverModel.findByIdAndRemove(req.params.id).then(driverModel => driverModel ? res.json(driverModel) : res.status(404).send()) : res.status(404).send();
const putDriverModel = (req, res) => ObjectID.isValid(req.params.id) ? DriverModel.findByIdAndUpdate(req.params.id, new DriverModel(type(req, "driverModelType"), {new: true})).then(driverModel => driverModel ? res.json(driverModel) : res.status(404).send()) : res.status(404).send();

module.exports = {
    getHome,
    getDriver,
    getDriverById,
    addDriver,
    delDriver,
    putDriver,
    getBody,
    getBodyById,
    addBody,
    delBody,
    putBody,
    getTire,
    getTireById,
    addTire,
    delTire,
    putTire,
    getGlider,
    getGliderById,
    addGlider,
    delGlider,
    putGlider,
    getDriverModel,
    getDriverModelById,
    addDriverModel,
    // delDriverModel
    putDriverModel
}