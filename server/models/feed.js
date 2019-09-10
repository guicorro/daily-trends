'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedSchema = Schema({
    title: String,
    body: String,
    image: String,
    source: String,
    publisher: String,
});

module.exports = mongoose.model('Feed', FeedSchema)