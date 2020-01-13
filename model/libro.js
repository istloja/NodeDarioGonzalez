const mysql = require("../baseConecxion/bd.js")
const libro = function(Libro){
  this.codigo = Libro.codigo;
  this.nombre = Libro.nombre;
  this.descripcion = Libro.descripcion;
  this.stock = Libro.stock;
  this.costo = Libro.costo;
  this.categoria_nombre = Libro.categoria_nombre;
};

libro.obtenerTodos = result =>{
  mysql.query('SELECT * FROM libro',(error,res)=>{
    if (error){
      console.log(error,' error consulta');
      result(-1,error);
      return;
    }
    console.log(res);
    result(1,res);
  });
};

module.exports=libro;
