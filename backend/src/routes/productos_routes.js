const express = require('express');
const router = express.Router();
const conexion = require('../connection');
const fs = require('fs');

router.get('/', (req, res) =>{

    let sqlProductos = `SELECT producto_id As id, categoria_id As categoria , producto, precio, producto_img As img  
                        FROM productos`;

    let where = '';

    let orderBy = '';

    if ( req.query.categoria ){
        where = ' WHERE categoria_id = ' + req.query.categoria;
    }

    if(req.query.precioDesde){
        where += where == '' ? ' WHERE ' : ' AND ';
        where += 'precio >= ' + req.query.precioDesde;
    }

    if(req.query.precioHasta){
        where += where == '' ? ' WHERE ' : ' AND ';
        where += 'precio <= ' + req.query.precioHasta;
    }

    sqlProductos += where;

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

    sqlProductos += orderBy;

    conexion.query(sqlProductos, function(err, result, fields){
        if(err) throw err;
        res.json(result);
    })
})

router.get('/search/:terminoBuscado', (req, res) =>{

    let sqlSearch = `SELECT producto_id As id, categoria_id As categoria, producto, precio, producto_img As img 
                        FROM productos
                        WHERE producto LIKE ?`;

    let values = [`%${req.params.terminoBuscado}%`];

    let orderBy = '';

    if ( req.query.categoria ){
        sqlSearch += ' AND categoria_id = ' + req.query.categoria;
    }

    if(req.query.precioDesde){
        sqlSearch += ' AND precio >= ' + req.query.precioDesde;
    }

    if(req.query.precioHasta){
        sqlSearch += ' AND precio <= ' + req.query.precioHasta;
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

    sqlSearch += orderBy;


    conexion.query(sqlSearch, values, function(err, result, fields){
        if(err) throw err;
        res.json(result);
    })
})

router.get('/:id', (req, res) => {

    let sqlProductos = `SELECT producto_id As id, categoria_id As categoria, producto, precio, producto_img As img
               FROM productos
               WHERE producto_id = ${req.params.id} `;
 
    conexion.query(sqlProductos, function (err, result, fields) {
 
       if (err) throw err;
       res.json(result[0]);
    })
 
 })

module.exports = router;