//Requerimiento del Router de Express
const { Router } = require('express');

//Instancia de Funcion
const router = Router();

//Rutas del Servidor
router.post('/lead', (req, res) => {
   let obj = JSON.parse(req.body)
   console.log(obj)
   res.send('recibido')
});

//Exportar Rutas
module.exports = router;
