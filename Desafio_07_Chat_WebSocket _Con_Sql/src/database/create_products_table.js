const { options } = require('./options/mariaDB.js');
const knex = require('knex')(options);

knex.schema.createTable('products', (table) => {
    table.increments('id');
    table.string('name');
    table.integer('price');
    table.string('thumbnail');
})
    .then(() => {
        console.log('Tabla "Productos" creada');
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        knex.destroy();
    });
