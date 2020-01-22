module.exports = app =>{
  const libro = require("./controlador/controladorLibro.js");
  app.post("/obtenerTodos",libro.getAll);
  app.post("/crearNuevoLibro", libro.crearNuevoLibro)
};
