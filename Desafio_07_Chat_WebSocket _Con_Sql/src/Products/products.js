const { options } = require('../database/options/mariaDB');
const knex = require('knex')(options);

const listOfProducts = async () => {
  try {
    const products = await knex
      .from('products')
      .select('*')
      .orderBy('price', 'desc')

    return products;
  } catch (err) {
    throw new Error('No se pudo leer la Base de Datos', err)
  }
}




const getProduct = async (id) => {
  try {
    const products = await knex
      .from('products')
      .select('*')
      .where({ id })
      .then((data) => {
        return data;
      }).catch((err) => {
        throw new Error('No se pudo leer la Base de Datos', err)
      });
  } catch (err) {
    throw new Error('No se pudo leer la Base de Datos', err)
  }
}

const addProduct = async (product) => {
  try {
    knex('products')
      .insert(product)
      .then(() => {
        return ('Producto insertados')
      })
      .catch((err) => {
        throw new Error('No se pudo leer la Base de Datos', err)
      })
  } catch (err) {
    throw new Error('No se pudo leer la Base de Datos', err)
  }
}

const updateProduct = (id, newContent) => {
  const product = getProduct(parseInt(id))
  if ((product.id == id) && (product.id != null)) {
    product.name = newContent.name
    product.price = newContent.price
    product.thumbnail = newContent.thumbnail
    return product
  } else {
    return 'Producto no encontrado'
  }
}

const deleteProduct = async (i) => {
  try {
    knex
      .from('products')
      .where('id', '=', i)
      .del()
      .then(() => {
        return ('Producto eliminado');
      }).catch((err) => {
        throw new Error('No se pudo leer la Base de Datos', err)
      })
  }
  catch (err) {
    throw new Error('No se pudo leer la Base de Datos', err)
  }
}


module.exports = { listOfProducts, getProduct, addProduct, updateProduct, deleteProduct }