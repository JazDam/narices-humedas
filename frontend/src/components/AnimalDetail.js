import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useParams} from 'react-router-dom';

export default ()=>{

    let {id} =useParams();

    let [animal, setAnimal] = useState(null);

    useEffect(
        ()=>{

            fetch('http://localhost:8888/animales/' + id).then(response => response.json()
            ).then(data => {
                setAnimal(data);
                console.log(data)
            })
        }, [id]
    )
    return(
        animal &&
        <Row className="d-flex justify-content-center mb-5">
            <Col md={4} className="d-flex justify-content-center">
                <img alt= "imagen" src={animal.imagen} className="img-fluid"/>
            </Col>

            <Col md={4}>
               <h4>Para tramitar la adopción comunicate a <b>narices_humedas@gmail.com</b></h4>
               <h2>
                   {animal.nombre}
               </h2>
               <h2>
                    {animal.edad}
               </h2>
               <h2>
                   {animal.sexo}
               </h2>
            </Col>
        </Row>
    )
}