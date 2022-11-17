//Requerimiento del Modelo y los Esquemas
const { Schema, model } = require('mongoose');

//Contruccion del Schema de Guardado
const leads_schema = new Schema({
    nombre: String,
    email: String,
    telefono: Number,
});

//Exportacion del Modelo para Guardado
module.exports = model('leads', leads_schema);
