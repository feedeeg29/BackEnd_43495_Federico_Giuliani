const express = require('express')
const router = require('../Routes/routes.js')
const app = express()
const PORT = 8080
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);



//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', router)

//

//chat Socket.io
const mensajes = [];
io.on("connection", (socket) => {
  console.log("Nuevo Usuario Conectado");
  socket.emit("mensajes", mensajes);
  socket.on("mensaje", (data) => {
    mensajes.push({ socketid: socket.id, mensaje: data });
    io.sockets.emit("mensajes", mensajes);
    console.log(mensajes);
  })
})

//Views Handlebars

const { engine } = require('express-handlebars')
app.set('view engine', 'hbs');
app.set('views', __dirname + '/Views/hbs');
app.engine('hbs', engine({

  extname: '.hbs',
  defaultLayout: 'index.hbs',
  layoutsDir: __dirname + '/Views/hbs/main',
  partialsDir: __dirname + '/Views/hbs/partials',
}));




app.get("/", (req, res) => {
  res.render("index")
});
app.get("/all", (req, res) => {
  res.render("products")
})

app.get("/productos", (req, res) => {
  res.render("index")
});

app.get("/chat", (req, res) => {
  res.render("chat")
})

// Server conectado exitosamente
const server = httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// Server con error
server.on("error", (err) => {
  console.log(`El servidor a tenido un error:${err}`)
    `El servidor a tenido un error:${err}`
})
