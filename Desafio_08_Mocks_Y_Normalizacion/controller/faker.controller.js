const productosFaker = require("../utils/productosFaker")

class Contenedor { 
  static getAll() {
  return productosFaker.list();
  }  
}

module.exports = Contenedor;