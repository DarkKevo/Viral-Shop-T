//Requerimiento del Router de Express
const { Router } = require('express');

//Instancia de Funcion
const router = Router();

//Rutas del Servidor
router.get('/', (req, res) => {
    console.log('Dale que Sirve');
    res.send('100/100');
});

//Exportar Rutas
module.exports = router;
