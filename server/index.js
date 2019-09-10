'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = 8080;

// Conexion a MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/daily-trends', { useNewUrlParser: true })
  .then(() => {
    console.log('Conectado a: mongodb://localhost:27017/daily-trends');
            
    // Crear servidor
    app.listen(port, () => {
      console.log('Servidor corriendo en http://localhost:' + port);
      var date = new Date();
      console.log(date.toLocaleString());
    });
  })
  .catch(err => console.log(err));