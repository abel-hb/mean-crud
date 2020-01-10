//Llammamos a la libreria
const express = require('express');

//Creamos el objeto app que es el server
const app = express();

//Puerto de escucha para el server
//Usamos el metodo listen para que el servidor empieze a escuchar
app.listen(3000, () => {
    console.log('Server on port 3000');
});
