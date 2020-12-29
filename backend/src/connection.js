const mysql = require('mysql');

let conexion = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'narices_humedas_bd'
    }
)

conexion.connect(
    err=>{
        if(err) throw err;
        console.log('conectado');
    }
)

module.exports = conexion;