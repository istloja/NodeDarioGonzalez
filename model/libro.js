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

libro.eliminarLibro = (eliminarLibro, result) => {
  sql.query("DELETE FROM libro WHERE codigo = ?", eliminarLibro, (error,res) => {
    if (error) {
      console.log(error,' error al eliminar Libro');
      result(null,error);
      return;
    } else {
      result(null,res);
    }
  });
};

libro.editarLibro = (codigoLibro, editarLibro, result) =>{
  sql.query("UPDATE libro SET nombre = ?, descripcion = ?, stock = ?, costo = ?, categoria_nombre = ? WHERE codigo = ?",
  [editarLibro.nombre,editarLibro.descripcion,editarLibro.stock,editarLibro.costo,editarLibro.categoria_nombre,codigoLibro],(error,res) =>{
    if (error) {
      console.log(error,' error al editar el Libro');
      result(null,error);
      return;
    }else {
      if(res.affectedRows == 0){
        result({kind:"not_found"},null);
      }else {
        result(null,res)
      }
    }
  });
};

module.exports=libro;
