var ObjectId = require("mongodb").ObjectID;

function carritoModel(db){
  var lib = {};
  var carrito = db.collection('carrito');

  lib.getCarrito = (cliente, handler)=>{
    carrito.find({"cliente": cliente}).toArray(
        (err , docs) => {
          if(err){
            handler(err, null);
          }else{
            handler(null, docs);
          }
        }
    );
  }

  lib.getCarritoProducto = (producto, handler)=>{
    carrito.find({"producto": producto}).toArray(
      (err , docs) => {
        if(err){
          handler(err, null);
        }else{
          handler(null, docs);
        }
      }
  );
  }

  lib.addCarrito = (nuevoCarrito, handler)=>{
    nuevoCarrito.cantidad = parseInt(nuevoCarrito.cantidad);
    carrito.insertOne(nuevoCarrito, (err, r)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, r.result);
      }
    });
  }


  lib.deleteCarrito = (id, handler) => {
    carrito.deleteOne({"_id": ObjectId(id)}, (err, result)=>{
      if(err){
        handler(err, null);
      } else {
        handler(null, result.result);
      }
    });
  
  }

  lib.updateCarrito = (producto, precio, handler) => {
    var filter = {"producto":producto};
    var updateStatement = {$inc :{cantidad: 1, subtotal: parseFloat(precio)}};
  
    carrito.updateOne(filter, updateStatement, (err, doc) => {
      if(err) {
        handler(err, null);
      } else {
        handler(null, doc);
      }
    });
  
  }


  return lib;
} // carritoModel
 module.exports = carritoModel;
