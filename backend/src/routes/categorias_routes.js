const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.get('/', (req, res) =>{

    let sqlCat = `SELECT categoria_id As id, categoria As nombre
                  FROM categorias
                  ORDER BY categoria`;

    conexion.query(sqlCat, function(err, result, fields){
        if(err) throw err;

        res.json(result);
    })
})
module.exports = router;