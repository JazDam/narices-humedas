import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../img/gato changuito.png';
import img2 from '../img/perro bolsa.png';
import '../css/textoEimagen.css';

export default () => {

    return (

        <Row classname="justify-content-center">
            <Col>
                <div className="caja">
                    <img src={img} />
                </div>
            </Col>
            <Col>
                <div className= "recaudacion">
                    <h1 className="mt-5">Todo lo recaudado de nuestro pet shop será destinado a Narices Húmedas</h1>
                </div>
                <div className="caja2">
                    <img src={img2} />
                </div>
            </Col>
        </Row>

    )
}