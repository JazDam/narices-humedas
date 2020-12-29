import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../css/comprar.css';
import img from '../img/asombrado.png';

export default () => {

    return (

        <>

            <Container fluid className= "comprar">

                <Row className= "ml-5 mb-5"><h1>Cómo comprar?</h1></Row>

                <Row>
                    <Col className="compra">
                        <Row className= "fila"><h1>1</h1></Row>
                        <Row className= "fila"><h1>Registrate</h1></Row>
                        <Row className= "fila"><h2>Para poder comprar en nuestro pet shop, primero tenés que crear una cuenta como usuario.</h2></Row>
                    </Col>


                    <Col className="compra">
                        <Row className= "fila"><h1>2</h1></Row>
                        <Row className= "fila"><h1>Buscá Productos</h1></Row>
                        <Row className= "fila"><h2>Buscá los productos que te gusten navegando las categorías o utilizando el buscador.</h2></Row>
                    </Col>

                    <Col className="compra">
                        <Row className= "fila"><h1>3</h1></Row>
                        <Row className= "fila"><h1>Iniciá tu compra</h1></Row>
                        <Row className= "fila"><h2>Hacé 'click' en iniciar compra para confirmar el pedido y seguí los pasos indicados para completar tu compra.</h2></Row>
                    </Col>

                    <Col>
                    <img
                    src={img} 
                    style={{width: "100%"}}/>
                    </Col>

                </Row>

            </Container>

        </>
    )
}