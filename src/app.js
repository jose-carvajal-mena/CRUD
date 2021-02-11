//Creacion del servidor.
const express = require('express');
const morgan = require('morgan')
const app = express();
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const path = require('path')//Modulo para unir directorios.

//importacion de rutas.
const usuariosRutas = require('./routers/usuarios');
//const { urlencoded } = require('express');

//Configuracion del servidor.

//El puerto
app.set('port', process.env.PORT || 3000);

//Motor de plantillas
app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'))


//Funciones
app.use(morgan('dev'))
app.use(myConnection(mysql,{
    host:'localhost',
    user: 'root',
    password:'',
    port:3306,
    database: 'crud'
},'single'));

app.use(express.urlencoded({extended: false}));
//Rutas.
app.use('/',usuariosRutas);

//Archivos estaticos.
app.use(express.static(path.join(__dirname, 'public')));




app.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})