// server.js

import express from 'express';
import path from 'path'; // Asegúrate de importar 'path'

const app = express();
const port = 6000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());

// Configura el middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(process.cwd(), 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html')); // Cambia esto para enviar el archivo index.html
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
