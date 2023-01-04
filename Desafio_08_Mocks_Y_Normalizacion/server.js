const chat = require("./utils/chat");

//inicializo express
const express = require("express");
const app = express();

//inicalizo el socket.io
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

//importo el router (index.js)
const router = require("./routes")

//seteo de plantilla
app.set('views', './views');
app.set('view engine', 'ejs');

//middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

//conexion
io.on('connection', async function(socket) {
  //mensaje en consola cuando se conecta un usuario
  console.log('Un cliente se ha conectado'); 
  
  const messages = await chat.list();  
  socket.emit('messages', messages);   
  
  io.sockets.emit('productos');

  //funcion para guardar un mensaje y emitirlo a todos los usuarios
  socket.on ('new-message', async function (data){
    try {
      chat.save(data);
      const messages = await chat.list();      
      io.sockets.emit('messages', messages);
    } catch (err) {
      console.log(err);
    }
    
  });

});

//levantamos el servidor en el puerto 8080
httpServer.listen(8080, function() {
  console.log('Servidor corriendo en http://localhost:8080');
})






