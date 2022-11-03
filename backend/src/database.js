//Requerimiento de Modulo Mongoose (MONGO DB)
const mongoose = require('mongoose');

//Algunas configuraciones de Mongoose
let url = 'mongodb://localhost/viral-shop';

//Conexion
mongoose
    .connect(url, {
        useNewUrlParser: true,
    })
    //Conexion Exitosa
    .then((db) => console.log('Database is Connected'))
    //Error en 
    .catch((err) => console.log(err));
