const { mongoose } = require('../db/mongoose.js');

const Tire = mongoose.model('Tire', {
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    speedGnd: {
        type: Number,
        required: true,
        minlength: 1
    },
    speedWtr: {
        type: Number,
        required: true,
        minlength: 1
    },
    speedAir: {
        type: Number,
        required: true,
        minlength: 1
    },
    speedGty: {
        type: Number,
        required: true,
        minlength: 1
    },
    acceleration: {
        type: Number,
        required: true,
        minlength: 1
    },
    weight: {
        type: Number,
        required: true,
        minlength: 1
    },
    handlingGnd: {
        type: Number,
        required: true,
        minlength: 1
    },
    handlingWtr: {
        type: Number,
        required: true,
        minlength: 1
    },
    handlingAir: {
        type: Number,
        required: true,
        minlength: 1
    },
    handlingGty: {
        type: Number,
        required: true,
        minlength: 1
    },
    grip: {
        type: Number,
        required: true,
        minlength: 1
    },
    miniturbo: {
        type: Number,
        required: true,
        minlength: 1
    }
});

module.exports = { Tire };