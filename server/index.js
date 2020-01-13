//Llammamos a la libreria
const express = require('express');
//Creamos el objeto app que es el server
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');

//Settings  Configuraciones basica del server
app.set('port',process.env.PORT || 3000);//Esto es para coger los puertos por defecto



//Middlewares Trnajar con la imformacion del servidor
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api/teachers', require('./routers/teachers.routers'));



//Starting the server
//Puerto de escucha para el server
//Usamos el metodo listen para que el servidor empieze a escuchar
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});
