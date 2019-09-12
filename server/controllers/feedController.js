'use strict'

var Feed = require('../models/feed');

var fs = require('fs');
var path = require('path');


function readFeeds(req, res){

    Feed.find((err, feeds, total) => {
        if(err){
            return res.status(500).send({
                message: 'Error en la peticion'
            });
        }
        if(!feeds){
            return res.status(404).send({
                message: 'No hay feeds disponibles'
            });
        }

        return res.status(200).send({
            feeds,
        })
    });
}


function readFeed(req, res){
    var feedId = req.params.id;

    Feed.findById(feedId, (err, feed) => {
        if(err){
            return res.status(500).send({
                message: 'Error en la peticion'
            });
        }
        if(!feed){
            return res.status(404).send({
                message: 'El feed no existe'
            });
        }

        return res.status(200).send({
            feed
        });
    })
}


function createFeed(req, res){
    var params = req.body;
    var feed = new Feed();

    feed.title = params.title;
    feed.body = params.body;
    feed.image = params.image;
    feed.source = params.source;
    feed.publisher = params.publisher;

    feed.save((err, feedStored) =>{
        if(err){
            return res.status(500).send({
                message: 'Error al guardar el feed'
            })
        }
        if(feedStored){
            res.status(200).send({
                feed: feedStored
            })
        }else{
            res.status(404).send({
                message: 'No se ha creado el feed'
            })
        }
    })                 
}

function updateFeed(req, res){
    var feed = req.body;
    var feedId = req.params.id;

    if(feedId == null || feedId == ''){
        return res.status(200).json('No existe el _id');
    }

    Feed.findByIdAndUpdate(feedId, feed, {new: true}, (err, feedUpdated) => {
            if(err){
                return res.status(500).send({
                    message: 'Error en la peticion de update'
                });
            }
            if(!feedUpdated){
                return res.status(500).send({
                    message: 'No se ha podido actualizar el feed'
                });
            }
            return res.status(200).send({
                feed: feedUpdated
            });
        });
}

function deleteFeed(req, res){
    var feedId = req.params.id;

    Feed.findById(feedId, (error, feedBorrado) => {
        if(error){
            return res.status(400).json(error);
        }
        if(feedBorrado === null){
            return res.status(200).json('El elemento no existe');;
        }
        Feed.deleteOne( { "_id" : feedId } , ( error =>{
                if(error){
                    return res.status(400).json('Error: ' + error);
                }
                return res.status(200).json('Borrado: ' + feedId);
        }));
    });
}



// Subir archivo imagen/avatar de usuario
function uploadImage(req, res){
    var feedId = req.params.id;

    if(req.files){
        var file_path = req.files.image.path;
        var file_split = file_path.split('\/');
        var file_name = file_split[1];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];
        
        if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){
            // Actualizar documento de usuario logueado
            Feed.findByIdAndUpdate(feedId, { image: file_name}, {new: true}, (err, feedUpdated) =>{
                if(err){
                    return res.status(500).send({
                        message: 'Error en la peticion de update'
                    });
                }
                if(!feedUpdated){
                    return res.status(500).send({
                        message: 'No se ha podido actualizar el usuario'
                    });
                }
                return res.status(200).send({
                    feed: feedUpdated
                });
            })
        }else{
            return removeFilesOfUploads(res, file_path, 'Extension no valida')
        }

    }else{
        return res.status(200).send({
            message: 'No se ha subido ninguna imagen'
        })
    }
}

function removeFilesOfUploads(res, file_path, message){
    fs.unlink(file_path, (err) => {
        return res.status(200).send({
            message: message
        });
    });
}

function getImageFile(req, res){
    var image_file = req.params.imageFile;
    var path_file = './images/' + image_file;
    fs.exists(path_file, (exists) => {
        if(exists){
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({
                message: 'No existe la imagen'
            })
        }
    })
}


module.exports = {
    readFeed,
    readFeeds,
    createFeed,
    updateFeed,
    deleteFeed,
    uploadImage,
    getImageFile
    
}