const express = require('express');
const router = express.Router();
const conexion = require('../connection');
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {

   let sql = `SELECT pub_id As id, pub_nombre As nombre, pub_edad As edad, pub_sexo As sexo, pub_image As imagen
              FROM publicaciones`;

   conexion.query(sql, function (err, result, fields) {

      if (err) throw err;
      res.json(result);
   })
})

router.get('/user/:id', (req, res) => {

   let sql = `SELECT pub_id As id, pub_nombre As nombre, pub_edad As edad, pub_sexo As sexo, pub_image As imagen
                 FROM publicaciones
                 WHERE usr_id = ${req.params.id} `;
   conexion.query(sql, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
   })
})

router.get('/:id', (req, res) => {
   let sql = `SELECT pub_id As id, pub_nombre As nombre, pub_edad As edad, pub_sexo As sexo, pub_image As imagen
              FROM publicaciones
              WHERE pub_id = ${req.params.id} `;

   conexion.query(sql, function (err, result, fields) {

      if (err) throw err;
      res.json(result[0]);
   })

})

router.post('/', (req, res) => {

   let imageFileName = '';

   if (req.files) {

      let animalImage = req.files.animalImage;

      imageFileName = Date.now() + path.extname(animalImage.name);

      animalImage.mv('../public/img/' + imageFileName, function (err) {
         if (err) {
            console.log(err);
         }
      })

      console.log(imageFileName);
   } else {
      console.log('no hay archivo');
   }

   let sqlInsert = `INSERT INTO publicaciones(pub_nombre, pub_edad, pub_sexo, pub_image, usr_id)
                    VALUES(
                       '${req.body.animalName}',
                       '${req.body.animalEdad}',
                       '${req.body.animalSex}',
                       '${process.env.IMG_URL + imageFileName}',
                        ${req.session.userId}
                    )`;

   conexion.query(sqlInsert, function (err, result, fields) {
      if (err) {
         res.json(
            {
            status: 'error',
            message: 'Error al realizar la publicación.'
            }
         )
      }else{
         res.json(
            {
               status: 'ok',
               message: 'Publicación realizada correctamente!'
            }   
        ) 
      }
   })


})

router.put('/:id', (req, res) => {

   let imageFileName = '';

   let sqlUpdate = `UPDATE publicaciones
                      SET pub_nombre= ?,
                          pub_edad= ?,
                          pub_sexo= ?`;
   let values = [
      req.body.animalName,
      req.body.animalEdad,
      req.body.animalSex
   
   ];

   if (req.files) {

      //borro el archivo de la imagen anterior
      conexion.query('SELECT pub_image FROM publicaciones WHERE pub_id=' + req.params.id, 
      function(err, result, fields){

         if(err){
            console.log('error')
         }else{
            fs.unlink('../public/img/' + path.basename( result[0].pub_image), 
            err=>{
               if(err) throw  err;
               console.log('archivo eliminado');
            });

         }
      
     })

      let animalImage = req.files.animalImage;

      imageFileName = Date.now() + path.extname(animalImage.name);

      animalImage.mv('../public/img/' + imageFileName, function (err) {
         if (err) {
            console.log(err);
         }
      })

      sqlUpdate += ', pub_image = ?';
      values.push(process.env.IMG_URL + imageFileName);

   } else {
      console.log('no hay archivo');
   }

   sqlUpdate += 'WHERE pub_id = ?';
   values.push(req.params.id);

   conexion.query(sqlUpdate, values, function (err, result, fields) {
      if (err) {
         res.json(
            {
            status: 'error',
            message: 'Error al modificar la publicación.'
            }
         )
      }else{
         res.json(
            {
               status: 'ok',
               message: 'Publicación modificada correctamente!'
            }   
        ) 
      }
   })
})

router.delete('/:id', (req, res) =>{

   let sqlDelete =`DELETE FROM publicaciones
                   WHERE pub_id= ?`;

   values = [req.params.id];
   conexion.query(sqlDelete, values, (err, result, fields) =>{
      if(err){
         res.json(
            {
               status: 'error',
               message: 'Error al eliminar la publicación.'
            }
         )
      }else{
         res.json(
            {
               status: 'ok',
               message: 'Publicación eliminada.'
            }
         )
      }
   })
})

module.exports = router;