const sql = require("../baseConexion/bd.js")
const libro = function(Libro){
  this.codigo = Libro.codigo;
  this.nombre = Libro.nombre;
  this.descripcion = Libro.descripcion;
  this.stock = Libro.stock;
  this.costo = Libro.costo;
  this.categoria_nombre = Libro.categoria_nombre;
};

libro.obtenerTodos = result =>{

  sql.query("SELECT * FROM libro",(error,res) => {
    console.log(res);
    if (error){
      console.log(error,' error consulta');
      result(null,error);
      return;
    }else {
      console.log(res);
      result(null,res);
    }
  });
};
module.exports=libro;
