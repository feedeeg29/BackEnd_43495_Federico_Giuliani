const {options} = require('../dataBase/options/mariaDB.js');
const knex = require('knex')(options);

//funcion para mostrar todos los productos
const list = async () => {
  try {    
    const productos = await knex
      .from('productos') 
      .select('*') 
      .orderBy('price', 'desc') 
    return productos; 
  } catch (err) {
    throw new Error('No se pudo leer la Base de Datos', err)
  }  
}

//funcion para guardar un producto
const save = async (product) => {
  try {    
    knex('productos') 
    .insert(product) 
    .then(() => { 
    return ('Producto insertados')})
    .catch((err) => {
      throw new Error('No se pudo leer la Base de Datos', err)
    })
  } catch (err) {
    throw new Error('No se pudo leer la Base de Datos', err)
  }   
}

 //funcion para obtener producto segun ID
 const getById = async (id) => {
  try {
    const producto = await knex
    .from('productos') 
    .select('*') 
    .where({id}) 
    .then((data) => { 
      return data;
    }).catch((err) => {    
      throw new Error('No se pudo leer la Base de Datos', err)
    });
  } catch (err) {
    throw new Error('No se pudo leer la Base de Datos', err)
  } 
} 

 //funcion que elimina segun id
 const deleteById = async (i) => {

  try {
    knex
    .from('productos') 
    .where('id', '=', i) 
    .del() 
    .then (() => { 
      return('Producto eliminado');  
    }).catch((err) => {
      throw new Error('No se pudo leer la Base de Datos', err)
    })  
  }
  catch (err) {
    throw new Error('No se pudo leer la Base de Datos', err)
  }  
} 

module.exports = { list, save, getById, deleteById};