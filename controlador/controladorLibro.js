const modelo = require("../model/libro.js");
exports.obtenerTodos = (req,res)=>{
  modelo.findAll((err,data)=>
  if (err) {
    res.satatus(500).send({mensaje:"No se puede obtener los datos"});
    else (res).send(data);
  )};
};
