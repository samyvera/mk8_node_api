const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin:nuggets@cluster-wlze5.mongodb.net/Collections?retryWrites=true", { useNewUrlParser: true });

module.exports = { mongoose };