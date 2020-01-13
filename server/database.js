//conexion a la base de datos
const mongoose = require('mongoose');
const URI = "mongodb://localhost/mean-crud";


//Trbajar con la conexion
mongoose.connect(URI)
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));



    module.exports = mongoose;

