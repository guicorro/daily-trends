'use strict'

var express = require('express');
var FeedController = require('../controllers/feedController');
var multiPart = require('connect-multiparty');
var md_upload = multiPart({uploadDir: './images'})

var api = express.Router();

//Añadir mdAuth.ensureAuth para poder realizar las operaciones unicamente cuando se tiene el token.
api.get('/feed/:id', FeedController.readFeed);
api.get('/feeds/', FeedController.readFeeds);
api.post('/feed/', FeedController.createFeed);
api.put('/feed/:id', FeedController.updateFeed);
api.delete('/feed/:id', FeedController.deleteFeed)

api.post('/upload-image-contact/:id',[md_upload] ,FeedController.uploadImage);
api.get('/get-image-feed/:imageFile', FeedController.getImageFile);

module.exports = api;

