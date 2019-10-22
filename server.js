//importo modulos
const mysql = require('mysql');
const express = require('express')
const app = express();
const cors = require('cors');

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

//cors
app.use( cors({ origin: "localhost:3001", credentials: true  }) );

//obtengo todas las tareas
app.get('/memes', function (req, res) {
    // res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true' });
    connection.query('SELECT * FROM memes', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Levanto la aplicación
app.listen(3000, function () {
    console.log("App corriendo en el puerto 3000");
});