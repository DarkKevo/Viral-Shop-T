//Requerimiento del Router de Express
const { Router } = require('express');

//Requerimiento del Modelo de Mongo de LeadsSchema
const lead = require('../models/leads');
const telefono = require('../models/phones');

//Instancia de Funcion
const router = Router();

//Rutas del Servidor
router.post('/lead', async (req, res) => {
    const { nombre, correo, telefono } = req.body;
    const lead_save = new lead({
        nombre: nombre,
        correo: correo,
        telefono: telefono,
    });
    lead_save.save().then((res) => {
        console.log(res);
    });
    res.send('Recibido y guardado');
});

router.get('/telefonos', async (req, res) => {
    const telefonos_lista = await telefono.find()
    res.json(telefonos_lista);
})

//Exportar Rutas
module.exports = router;
