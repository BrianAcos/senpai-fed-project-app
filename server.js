//importo modulos
const mysql = require('mysql');
const express = require('express')
const app = express();

//establesco parametros de coneccion con mi base de datos
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'propiedaddeluis',
    database: 'memeland',
});

//conecto mi base de batos
connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('DB Conected');
    }
});

//obtengo todas las tareas
app.get('/memes', function (req, res) {
    connection.query('SELECT * FROM memes', (err, rows, fields) => {
        if (!err) {
            res.send(JSON.stringify(rows));
        } else {
            console.log(err);
        }
    });
});

//Levanto la aplicación
app.listen(3000, function () {
    console.log("App corriendo en el puerto 3000");
});