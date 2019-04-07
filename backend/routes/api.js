var express = require('express');
var router = express.Router();

function apiInit(db){
  var usuariosApi = require('./api/usuarios');
  var productosApi = require('./api/productos')(db);
  var clientesApi = require('./api/clientes')(db);
  

  /*function verificarLogin(req, res, next ){
    var isLoggedIn = req.session.logged && true;
    if(isLoggedIn){
      next();
    }else{
      res.status(403).json({"error":"No Autorizado"});
    }
  }
  */

  router.use('/usuarios', usuariosApi);
  router.use('/productos', productosApi);
  router.use('/clientes', clientesApi);
  
  return router;
}
module.exports = apiInit;
