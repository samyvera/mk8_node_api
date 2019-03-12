const { mongoose } = require('../db/mongoose.js');

const DriverModel = mongoose.model('DriverModel', {
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    size: {
        type: String,
        required: true,
        minlength: 1
    },
    speedGnd: {
        type: Number,
        required: true
    },
    speedWtr: {
        type: Number,
        required: true
    },
    speedAir: {
        type: Number,
        required: true
    },
    speedGty: {
        type: Number,
        required: true
    },
    acceleration: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    handlingGnd: {
        type: Number,
        required: true
    },
    handlingWtr: {
        type: Number,
        required: true
    },
    handlingAir: {
        type: Number,
        required: true
    },
    handlingGty: {
        type: Number,
        required: true
    },
    grip: {
        type: Number,
        required: true
    },
    miniturbo: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
})

module.exports = { DriverModel };