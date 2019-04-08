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

  lib.addCarrito = (nuevoCarrito, handler)=>{
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


  return lib;
} // carritoModel
 module.exports = carritoModel;
