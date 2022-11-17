const express = require('express')
const router = require('../Routes/routes.js')
const app = express()




//Engine Handlebars
const { engine } = require('express-handlebars')
//Engine PUG
//const {engine} = require('express-pug')
//Engine EJS
//const {engine} = require('express-ejs')

const PORT = 8080

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', router)



//Views EJS
//app.set('views', './src/Views/ejs');
//app.set('view engine', 'ejs');

//Views Pug
//app.set('views', './src/Views/pug');
//app.set('view engine', 'pug');

//Views Handlebars
/*app.set('view engine', 'hbs');
app.set('views', __dirname + '/Views/hbs');
app.engine('hbs', engine({

  extname: '.hbs',
  defaultLayout: 'index.hbs',
  layoutsDir: __dirname + '/Views/hbs/main',
  partialsDir: __dirname + '/Views/hbs/partials',
}));
app.get("/all", (req, res) => {
  res.render("products")
})
app.get("/productos", (req, res) => {
  res.render("main")
});*/


// Server conectado exitosamente
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// Server con error
server.on("error", (err) => {
  console.log(`El servidor a tenido un error:${err}`)
    `El servidor a tenido un error:${err}`
})
