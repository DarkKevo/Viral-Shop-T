//Requerimiento del Modelo y los Esquemas
const { Schema, model } = require('mongoose');

//Contruccion del Schema de Guardado
const phone_schema = new Schema({
    titulo: String,
    descripcion: String,
    precio: Number,
    img_url: String,
});

//Exportacion del Modelo para Guardado
module.exports = model('Phone', phone_schema);
