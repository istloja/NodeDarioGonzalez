const modelo = require("../model/libro.js");
exports.obtenerTodos = (req,res)=>{
  modelo.obtenerTodos((err,data)=>{
  if (err){
    res.status(500).send({mensaje:"No se puede obtener los datos"});
  }else{
    res.send(data);
    }
  });
};
