// importamos mysq
const mysql = require("mysql");
// importamos la configuracion bd
const config = require("../config/db.config.js");
const conexion = mysql.createConnection({
  host:config.Host,
  user:config.User,
  password:config.Password,
  database: config.bd,
});
conexion.connect(error=>{
  if (error) throw error;
  console.log("conexion exitosa");
});
module.exports = conexion;
