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

exports.eliminarLibro = (req,res) => {
  const eliminarLibro = req.body.codigo

  modelo.eliminarLibro(eliminarLibro, (error, data) => {

    if (error){
      res.status(500).send({mensaje:"Error al crear nuevo Libro"});
    }else{
      res.send(data);
      }

  });
};

exports.editarLibro = (req,res) =>{
  const codigoLibro = req.body.codigo;
  const editarLibro = new modelo(req.body);

  modelo.editarLibro(codigoLibro,editarLibro, (error, data) =>{

    if (error){
      if(error.kind == 'not_found'){
        res.status(400).send({mensaje:"No se encontro el Libro"});
      }else{
        res.status(500).send({mensaje:"Error al crear editar Libro"});
      }
    }else{
      res.send(data);
    }
  });
};
