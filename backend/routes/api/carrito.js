var uuidv4 = require('uuid/v4');
var express = require('express');
var router = express.Router();

function carritoInit(db){

var carritoModel = require('./carritoModel')(db);
var data = null; 

var carritoFormat = {
  'cliente':'',
  'producto':'',
  'descripcion':'',
  'categoria':'',
  'precio':null,
  'cantidad': null,
  'subtotal': null
};

/**
 * CONSULTAS A LA BASE DE DATOS
 */
router.get('/:cliente', function( req, res, next) {

  carritoModel.getCarrito(req.params.cliente,
    
    function(err, docs){
      if(err) {
        console.log(err);
        return res.status(500).json({error:"Ha ocurrido un error."});
      }
      return res.status(200).json(docs);
    }
  ); // getCarrito
});

/**
 * INSERCIONES Y MODIFICACIONES
 */
router.post('/agregar', function(req, res, next){
  var carrito = Object.assign({} , carritoFormat, req.body);
  var subtotal = parseInt(carrito.cantidad) * parseFloat(carrito.precio);
  carrito.subtotal = subtotal;
 
  carritoModel.addCarrito(carrito, (err, resultado)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"Ha ocurrido un error al momento de agregar el producto al carrito."});
    }
    return res.status(200).json(resultado);
  });// nuevo Producto
});

router.delete('/eliminar/:idcarrito', function(req, res, next){
  var id = req.params.idcarrito;

  carritoModel.deleteCarrito(id, (err, resultado)=>{
    if(err){
      return res.status(500).json({"error":"Ha ocurrido un error al momento de eliminar el producto del carrito."});
    }
    return res.status(200).json(resultado);
  }); // eliminar Carrito
}); 

return router;

} // carritoInit

module.exports = carritoInit;
