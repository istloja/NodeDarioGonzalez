const modelo = require("../model/libro.js");
exports.getAll = (req,res)=>{
  // console.log("llego");
  modelo.getAll((err,data)=>{
  if (err){
    res.status(500).send({mensaje:"No se puede obtener los datos"});
  }else{
    res.send(data);
    }
  });
};
