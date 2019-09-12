'use strict'

var express = require('express');
var FeedController = require('../controllers/feedController');
var WebScrapperController = require('../services/webScrapper');
var multiPart = require('connect-multiparty');
var md_upload = multiPart({uploadDir: './images'})

var api = express.Router();

api.get('/feed/:id', FeedController.readFeed);
api.get('/feeds/', FeedController.readFeeds);
api.post('/feed/', FeedController.createFeed);
api.put('/feed/:id', FeedController.updateFeed);
api.delete('/feed/:id', FeedController.deleteFeed)

api.get('/webScrapping/', WebScrapperController.scrappData);

api.post('/upload-image-feed/:id',[md_upload] ,FeedController.uploadImage);
api.get('/get-image-feed/:imageFile', FeedController.getImageFile);

module.exports = api;

