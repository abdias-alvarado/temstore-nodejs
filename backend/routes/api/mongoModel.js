var ObjectId = require("mongodb").ObjectID;

function mongoModel(db){
  var lib = {};
  var productos = db.collection('productos');

  lib.getProductos = (handler)=>{
      productos.find({}).toArray(
        (err , docs) => {
          if(err){
            handler(err, null);
          }else{
            handler(null, docs);
          }
        }
       );
  }

  lib.getProductoId = (idProducto, handler)=>{
    productos.findOne({ "_id": new ObjectId(idProducto)}, (err, doc)=>{
        if(err){
          handler(err, null);
        }else{
          handler(null, doc);
        }
      });
  }


  lib.addProducto = (nuevoProducto, handler)=>{
    productos.insertOne(nuevoProducto, (err, r)=>{
      if(err){
        handler(err, null);
      }else{
        handler(null, r.result);
      }
    });
  }


  lib.updateProducto = (id, handler) => {
    var filter = {"_id": ObjectId(id)};
    // get filered document
    productos.findOne(filter, (err, doc) => {
      if(err) {
        handler(err, null);
      } else {
          if(doc){

              var updateExpression = {};
              if(doc.done){
                  updateExpression = {"$set": {done : false, fcDone:null} };
              }else{
                  updateExpression = { "$set": { done: true, fcDone:new Date() } };
              }
              productos.updateOne(filter, updateExpression, (err, rslt)=> {
                  if(err) {
                    handler(err, null);
                  }else{
                    handler(null, rslt.result);
                  }
              });
          }else{
            handler(new Error("El producto no existe."), null)
          }
      }
    } );
  }
  return lib;
} // mongoModel
 module.exports = mongoModel;
