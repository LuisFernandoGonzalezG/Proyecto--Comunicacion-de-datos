const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('Cliente conectado al sistema.');
  
  // Generamos datos simulados en tiempo real cada 3 segundos
  const intervalo = setInterval(() => {
    const datoSimulado = {
      id: Math.floor(Math.random() * 1000),
      vehiculosPorMinuto: Math.floor(Math.random() * 50) + 10,
      velocidadPromedio: Math.floor(Math.random() * 40) + 20, // km/h
      semaforo: Math.random() > 0.5 ? 'VERDE' : 'ROJO',
      timestamp: new Date().toLocaleTimeString()
    };

    // Enviamos el dato simulado al frontend de React
    socket.emit('actualizacion_datos', [datoSimulado]);
  }, 3000);

  socket.on('disconnect', () => {
    clearInterval(intervalo);
    console.log('Cliente desconectado.');
  });
});

server.listen(5000, () => {
  console.log('Servidor backend de simulación corriendo en el puerto 5000');
});