const express = require("express");
const morgan = require("morgan");
const examplesRoutes = require("./routes/example.routes");

const app = express();

// si hacemos un middleware que guarde la fecha en la que se hace
// una consulta

const requestTime = (req, res, next) => {
  const date = Date.now();
  // crear una nueva propiedad timestamp en el objeto request
  req.tiempoyfecha = date;
  next();
};

app.use(requestTime);
app.use(morgan("dev"));
app.use(express.json()); // next

app.use(examplesRoutes); // middleware a nivel de rutas

app.listen(8000, () => {
  console.log("Servidor corrinedo en el puerto 8000");
});

// * Crear un nuevo proyecto de node
// * Vas a poner los siguientes middlewares
// * morgan con formato tiny, express.json()
// * y tu servidor debe atender las siguietnes peticiones
// ? GET en la ruta /users y debe responder 'Esto es un GET a users desde mi servidor'
// ? POST en la ruta /users ( enviar un json en el body ) responder el mismo objeto
// TODO tienen que investigar como responder un json en express

// ! Necesario tener tu archivo app.js
// ! crear una carpeta para las rutas con un archivo llamado user.routes.js
