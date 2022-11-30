//Requerimiento del Router de Express
const { Router } = require('express');

//Requerimiento del Modelo de Mongo de LeadsSchema
const lead = require('../models/leads');
const telefono = require('../models/phones');
const computadoras = require('../models/computers');

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

router.post('/telefonoAdd', async (req, res) => {
    const { titulo, description, precio, url } = req.body;
    const phone_save = new telefono({
        titulo: titulo,
        descripcion: description,
        precio: precio,
        img_url: url,
    });
    phone_save.save().then((res) => {
        console.log(res);
    });
    res.send('Recibido y Guardado');
});

router.post('/computadoraAdd', async (req, res) => {
    const { titulo, description, precio, url } = req.body;
    const computadora_save = new computadoras({
        titulo: titulo,
        descripcion: description,
        precio: precio,
        img_url: url,
    });
    computadora_save.save().then((res) => {
        console.log(res);
    });
    res.send('Recibido y Guardado');
});

router.get('/telefonos', async (req, res) => {
    const telefonos_lista = await telefono.find();
    res.json(telefonos_lista);
});

router.get('/computadoras', async (req, res) => {
    const computadoras_lista = await computadoras.find();
    res.json(computadoras_lista);
});

//Exportar Rutas
module.exports = router;
