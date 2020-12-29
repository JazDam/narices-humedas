import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/ImagenyTexto.css'; 
import img from '../img/cabeza.png';
import Container from 'react-bootstrap/Container';


export default () =>

    <Container className= "mb-5">
        <Row className="fila-text-1">
            <Col>
            <h1>no solo los humanos necesitan una casa
            <hr></hr>
            </h1>
            
            </Col>
        </Row>

        <Row className="fila-text-2">
            <Col>
            <h3 className= "mt-5">
            Narices Húmedas es una organización sin fines de lucro liderada por un grupo de voluntarios que buscan superar la situación de sobrepoblación, abandono, crueldad e indiferencia que viven millones de animales en nuestro país, a través de la acción conjunta de un grupo personas unidas bajo la premisa ética de que son seres sintientes.
            </h3>
            </Col>
            <Col> <img src={img} alt=""/></Col>
        </Row>
    </Container>









