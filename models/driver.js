const { mongoose } = require('../db/mongoose.js');

const Driver = mongoose.model('Driver', {
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
    driverModel: {
        type: String,
        required: true,
        minlength: 1
    },

})

module.exports = { Driver };