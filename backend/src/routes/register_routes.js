const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.post('/', (req, res) =>{
    
    console.log(req.body);

    let sqlRegister = `INSERT INTO usuarios(usr_nick, usr_nombre, usr_password)
                       VALUES(
                           '${req.body.nombreUsuarioRegister}',
                           '${req.body.nombreCompletoRegister}',
                           '${req.body.passwordRegister}'
                       )`;
    conexion.query(sqlRegister, function(err, result, fields){
        if(err){console.log('error')};

        res.send(
            {
                status: 'ok',
                message: 'Registro con éxito!'
            }
        )
    })
  
})

module.exports = router;