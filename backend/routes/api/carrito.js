var uuidv4 = require('uuid/v4');
var express = require('express');
var router = express.Router();

function carritoInit(db){

var carritoModel = require('./carritoModel')(db);
var data = null; 

var carritoFormat = {
  'nombre':'',
  'descripcion':'',
  'categoria':'',
  'precio':null,
  'fechaIngreso': null
};

/**
 * CONSULTAS A LA BASE DE DATOS
 */
router.get('/', function( req, res, next) {

    carritoModel.getProductos(
    function(err, docs){
      if(err) {
        console.log(err);
        return res.status(500).json({error:"Ha ocurrido un error."});
      }
      return res.status(200).json(docs);
    }
  ); // getProductos
});

/**
 * INSERCIONES Y MODIFICACIONES
 */
router.post('/nuevo', function(req, res, next){
  var producto = Object.assign({} , productoFormat, req.body);
  var fechaIngreso = new Date();

  producto.fecha_ingreso = fechaIngreso;
 
  // Mongo Model
  carritoModel.addProducto(producto, (err, resultado)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"No se ha podido agregar el producto."});
    }
    return res.status(200).json(resultado);
  });// nuevoProducto
});

router.delete('/eliminar/:idproducto', function(req, res, next){
  var id = req.params.idproducto;
  productosModel.deleteProducto(id, (err, resultado)=>{
    if(err){
      return res.status(500).json({"error":"No se ha podido eliminar el producto."});
    }
    return res.status(200).json(resultado);
  }); // deleteProducto
}); 

return router;

} // productosInit

module.exports = carritoInit;
