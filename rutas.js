module.exports = app =>{
  const libro = require("./controlador/controladorLibro.js");
  app.post("/obtenerTodos",libro.obtenerTodos);
  app.post("/crearNuevoLibro", libro.crearNuevoLibro);
  app.post("/eliminarLibro", libro.eliminarLibro)
  app.post("/editarLibro", libro.editarLibro)
};
