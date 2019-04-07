// Framework que permite configurar
// las respuestas del web server
var express= require('express');

// objeto que permite declara la
// rutas que se van a manejar
// en el web server
var router = express.Router();

/*
HTTP   |   router method |
------------------------ -----------
GET     |   router.get    |  Consulta
POST    |   router.post   |  Nuevo
PUT     |   router.put    |  Actualizar
DELETE  |   router.delete |  Borrar
 */

router.post('/nuevo', function(req, res, next){
  var _userData = req.body;
  console.log(_userData);
  res.json({"msg":"Usuario agregado exitosamente."});
}); // post new


router.post('/login', function(req, res, next){
  var _userData = req.body;
  console.log(_userData);
  res.json({"msg":"Ingreso exitoso."});
});// post login


module.exports = router;
