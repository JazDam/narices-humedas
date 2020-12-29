const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.post('/', (req, res) => {

    let sql = `
                SELECT *
                FROM usuarios
                WHERE usr_nick = ?
                  AND usr_password = ?
               `;
    let values = [
        req.body.user,
        req.body.password
    ]

    conexion.query(sql, values, (err, result, fields) => {
        if (err) {
            res, json({
                status: 'error',
                message: 'No es posible acceder en este momento, intente nuevamente en unos minutos.'
            })
        } else {
            if (result.length == 1) {

                req.session.user = req.body.user;
                req.session.userId = result[0].usr_id;

                res.json(
                    {
                        status: 'ok',
                        message: 'sesion iniciada',
                        loggedUser: {
                            id: req.session.userId,
                            nombre: result[0].usr_nombre
                        }

                    }
                )

            }else {
                res.json({
                    status: 'error',
                    message: 'Datos incorrectos.'
                })
            }
        }
    })
})

router.delete('/', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.json({
                status: 'error',
                message: 'error al cerrar la sesion'
            })
        } else {
            res.clearCookie('nariceshumedas');
            res.json({
                status: 'ok',
                message: 'sesion cerrada'
            })
        }
    })
})

module.exports = router;