//importo modulos
const mysql = require('mysql');
const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

//decirle a express que use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//configurar multer
const upload = multer({ dest: 'public/memes/' });

//establesco parametros de coneccion con mi base de datos
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
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
app.use(cors({ origin: "localhost:3000", credentials: true }));

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

// 'INSERT INTO memesaprobados VALUES (17, "brian"); INSERT INTO memescreados VALUES (17, "brian"); INSERT INTO memesguardados VALUES (17, "brian"); INSERT INTO memes VALUES (17, "titulo", null, "imagen", "acertijos", 20191020235959, 0, 0, 0, 0)'
//agregar memes
app.post('/agregar', upload.single('imagen'), function (req, res) {
    connection.query('INSERT INTO memes VALUES (17, ?, null, ?, ?, 20191020235959, 0, 0, 0, 0)', [req.body.titulo, 'memes/'+req.file, req.body.categoria], (err, rows, fields) => {
        console.log(req.file);
            if (err) {
                console.log(err);
                res.end('ERROR');
            } else {
                res.end('Agregaste');
            }
        });
});

//Levanto la aplicación
app.listen(3001, function () {
    console.log("App corriendo en el puerto 3001");
});