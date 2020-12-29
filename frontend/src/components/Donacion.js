import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../css/donacion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faBone } from '@fortawesome/free-solid-svg-icons';

export default () => {

    return (

        <Container className="contenedor">
            <Row>
                <h1 className="titulo">Donaciones</h1>
                <h1>Tu aporte nos permite continuar llevando a cabo actividades sanitarias, educativas y de asistencialismo.</h1>
                <div className="dropdown">
                    <Button> <FontAwesomeIcon icon={faBone} style={{ marginRight: "5px", height: "100px", width: "100px" }}></FontAwesomeIcon>
                    </Button>
                    <div className="dropdown-content">
                        <h1>Donación de insumos</h1>
                        <h4>Recepción en cualquiera de éstas direcciones</h4>
                        <Row>
                            <Col>
                                <h4>Palermo
                                -El Salvador 5244
                                 Horario: Lunes a Viernes de 09.00 a 17.00hs.</h4>
                            </Col>
                            <Col>
                                <h4>Flores
                                -Ramón L. Falcon 2567
                                 Horario: Lunes a Viernes de 10.00 a 19.00hs y Sábados de 10.00 a 13.00hs.</h4>
                            </Col>
                            <Col>
                                <h4>Almagro
                                -Medrano 1009
                                 Horario: Lunes a Viernes de 11.00 a 13.00hs y de 16.00 a 20.00hs. Sábados de 10.00 a 13.00hs.</h4>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Row>

            <Row>
                <div className="dropdown">
                    <Button>
                        <FontAwesomeIcon color="dark" icon={faHandHoldingUsd} style={{ marginRight: "5px", height: "100px", width: "100px" }} /></Button>
                    <div className="dropdown-content">
                        <h1>Aportes económicos</h1>
                        <h4>Depósito o transferencia Bancaria
                        (Doná el importe que quieras directamente en nuestra cuenta.)
                        Banco Provincia
                        Asociación Civil Narices Húmedas
                        Cuenta Corriente en pesos Nº 50555/8
                        Sucursal Nº: 05341 – San Antonio de Padua
                        CBU: 0140059501500205063480
                    CUIT: 30-71080658-3</h4>
                    </div>
                </div>
            </Row>

            <Row>
                <div className="dropdown">
                    <Button><FontAwesomeIcon color="dark" icon={faHandsHelping} style={{ marginRight: "5px", height: "100px", width: "100px" }} /></Button>
                    <div className="dropdown-content">
                        <h1>¿Queres ser voluntario?</h1>
                        <h4>Envianos tus datos con el asunto <b>Quiero ser voluntario</b> y nos pondremos en contacto</h4>
                        <h4>Mandanoslo a <b>narices_humedas@gmail.com</b></h4>
                    </div>
                </div>
            </Row>

            <Col>

            </Col>
        </Container>

    )
}
