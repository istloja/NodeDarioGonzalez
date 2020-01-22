const modelo = require("../model/libro.js");
exports.getAll = (req,res)=>{
  console.log(req.body.codigo);

  modelo.getAll((err,data)=>{
  if (err){
    res.status(500).send({mensaje:"No se puede obtener los datos"});
  }else{
    res.send(data);
    }
  });
};

exports.crearNuevoLibro = (req,res) => {
  const nuevoLibro = new modelo({
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    stock: req.body.stock,
    costo: req.body.costo,
    categoria_nombre: req.body.categoria_nombre
  });

  modelo.crearNuevoLibro(nuevoLibro,(error,data) => {
    if (error){
      res.status(500).send({mensaje:"Error al crear nuevo Libro"});
    }else{
      res.send(data);
      }
  });
}
