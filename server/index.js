//Llammamos a la libreria
const express = require('express');
//Creamos el objeto app que es el server
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');
const cors = require('cors');

//Settings  Configuraciones basica del server
app.set('port',process.env.PORT || 3000);//Esto es para coger los puertos por defecto



//Middlewares Trnajar con la imformacion del servidor
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/teachers', require('./routers/teachers.routers'));
app.use('/api/users', require('./routers/users.routers'));


//Starting the server
//Puerto de escucha para el server
//Usamos el metodo listen para que el servidor empieze a escuchar
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});
