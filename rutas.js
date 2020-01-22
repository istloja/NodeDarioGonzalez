module.exports = app =>{
  const libro = require("./model/libro.js");
  app.post("/obtenerTodos",libro.obtenerTodos);
};
