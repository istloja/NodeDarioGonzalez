const sql = require("../baseConexion/bd.js")
const libro = function(Libro){
  this.codigo = Libro.codigo;
  this.nombre = Libro.nombre;
  this.descripcion = Libro.descripcion;
  this.stock = Libro.stock;
  this.costo = Libro.costo;
  this.categoria_nombre = Libro.categoria_nombre;
};

libro.getAll = result =>{
  sql.query("SELECT * FROM libro",(error,res) => {
    if (error){
      console.log(error,' error consulta');
      result(null,error);
      return;
    }else {
      result(null,res);
    }
  });
};

libro.crearNuevoLibro = (nuevoLibro, result) =>{
  sql.query("INSERT INTO libro SET ?", nuevoLibro, (error,res)=>{
    if (error) {
      console.log(error,' error al crear Libro');
      result(null,error);
      return;
    } else {
      result(null,res);
    }
  });
};

module.exports=libro;
