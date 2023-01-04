const productos = require("../utils/productos")

class Contenedor {  
  static getAll() {
    return productos.list();
  }

  static save(object) {
    return productos.save(object);    
  }
} 

module.exports = Contenedor;