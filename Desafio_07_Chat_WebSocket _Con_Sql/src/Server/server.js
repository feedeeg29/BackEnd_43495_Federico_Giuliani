const express = require('express')
const router = require('../Routes/routes.js')
const app = express()
const PORT = process.env.PORT || 3030
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const path = require("path")
const fs = require('fs');
const Actions = require("../Controller/controller");
const chat = require("../Chat/chat")



//middleware
app.use(express.static('public'));
app.use(express.static(__dirname + "src"))
app.use(express.static(path.join(__dirname + "public")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/productos', router)

//



//Views Handlebars Config

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
  res.render("form")
});

app.use("/all", (req, res) => {
  res.render("products")
  console.log(products)
})

app.get("/productos", (req, res) => {
  res.render("form")
});

app.get("/chat", (req, res) => {
  res.render("chat")
})




/*const saveChat = () => {
  try {
    fs.writeFileSync(`./chatLog.txt`, JSON.stringify(chat, null, 2));
  } catch {
    console.log("Error en la escritura");
  }
};*/

/*io.on("connection", async (socket) => {
  console.log("Se ha conectado un usuario");
  const chat = await chat.list()

  socket.on("userMsg", (data) => {
    chat.save(data);
    io.sockets.emit("chat", chat);
    saveChat();
  });
});*/
io.on('connection', async function (socket) {
  //mensaje en consola cuando se conecta un usuario
  console.log('Un cliente se ha conectado');

  const messages = await chat.list();
  socket.emit('messages', messages);

  io.sockets.emit('productos');

  //funcion para guardar un mensaje y emitirlo a todos los usuarios
  socket.on('userMsg', async function (data) {
    try {
      chat.save(data);
      const messages = await chat.list();
      io.sockets.emit('messages', messages);
    } catch (err) {
      console.log(err);
    }

  });

});




// Server conectado exitosamente
const server = httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// Server con error
server.on("error", (err) => {
  console.log(`El servidor a tenido un error:${err}`)
    `El servidor a tenido un error:${err}`
})
