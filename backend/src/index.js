//requirimiento de Express
const express = require('express');

//Requerimiento de Componente de Comunicacion entre Servidores (Cors)
const cors = require('cors');

//Inicio de Express
const app = express();

//Requerir conexion de Mongo
require('./database');

//Middleware CORS
app.use(cors());

//Requerir el Enrutador de Express
let rutas = require('./routes/index.js');

//Usar Rutas
app.use('/', rutas);

//Algunas Configuraciones
let port = 3000;

//inicio de Express
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
