// importamos mysq
const mysql = require("mysql");
// importamos la configuracion bd
const config = require("../config/db.config.js");
const conexion = mysql.createConection({
  Host:config.Host,
  User:config.User,
  Password:config.Password,
  Database: config.BD,
});
conexion.connect(error=>{
  if (error) throw error;
  console.log("conexion exitosa");
});
module.export = conexion;
