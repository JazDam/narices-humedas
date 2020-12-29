const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.get('/:user', (req, res) =>{
    let sqlFav = `SELECT productos. producto_id As id, categoria_id As categoria, producto, precio, producto_img As img
                  FROM productos, favoritos
                  WHERE favoritos.usr_id = ?
                    AND productos.producto_id = favoritos.producto_id`;

    let orderBy = '';

    if ( req.query.categoria ){
    sqlSFav = ' AND categoria_id = ' + req.query.categoria;
    }
                
    if(req.query.precioDesde){
    sqlFav += ' AND precio >= ' + req.query.precioDesde;
    }
                
    if(req.query.precioHasta){
    sqlFav += ' AND precio <= ' + req.query.precioHasta;
    }
                
    if(req.query.orden){
    orderBy = ' ORDER BY ';
                
            switch(req.query.orden){
                    case 'menor_precio':
                        orderBy += ' precio ASC';
                            break;
                    case 'mayor_precio':
                        orderBy += ' precio DESC';
                            break;
            }
    }
                
    sqlFav += orderBy;

    let values = [req.params.user];
    conexion.query(sqlFav, values, (err, result, fields) =>{
        if(err) throw err;

        res.json(result);
    })
})

router.post('/', (req, res)=>{
    let SqlInsertFav = `INSERT INTO favoritos
                         VALUES (?, ?)`;
    let values = [req.body.userId, req.body.prodId];

    conexion.query(SqlInsertFav, values, (err, result, fields) =>{
        if(err){
            res.json(
                {
                    status: 'error',
                    message: 'Error al agregar el favorito'  
                }
            )
        }else{
            res.json(
                {
                    status: 'ok',
                    message: 'Agregado a favoritos'  
                }
            )
        }
    })
})

router.delete('/', (req, res)=>{
    let SqlDeleteFav = `DELETE FROM favoritos
                        WHERE usr_id = ?
                         AND producto_id = ?`;
    let values = [req.body.userId, req.body.prodId];

    conexion.query(SqlDeleteFav, values, (err, result, fields) =>{
        if(err){
            res.json(
                {
                    status: 'error',
                    message: 'Error al quitar el favorito'  
                }
            )
        }else{
            res.json(
                {
                    status: 'ok',
                    message: 'Favorito eliminado'  
                }
            )
        }
    })
})


module.exports = router;