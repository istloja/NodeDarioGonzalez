module.exports = app =>{
  const libro = require("./controlador/controladorLibro.js");
  app.get("/obtenerTodos",libro.getAll);
};
