/**
 * Created by Clay on 07/11/15.
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    return db;
};