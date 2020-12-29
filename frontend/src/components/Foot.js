/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../css/foot.css';

const Foot = () => {
    return (

        <Container fluid className= "contiene">
            <Row className= "foot-content">
            <Col className= "social">
                    <Row>
                        <a>
                            <img alt= "logo" src="https://image.flaticon.com/icons/svg/732/732026.svg" style={{ width: "50px" }} href="" />
                            <label>narices_humedas@gmail.com</label>
                        </a>
                    </Row>
                    <Row>
                        <a>
                            <img alt= "logo" src="https://image.flaticon.com/icons/svg/483/483947.svg" style={{ width: "50px" }} href="" />
                            <label>+54 9 11 23324313</label>
                        </a>
                    </Row>
                    <Row>
                        <a>
                            <img alt= "logo" src="https://image.flaticon.com/icons/svg/447/447031.svg" style={{ width: "50px" }} href="" />
                            <label>Av. Warnes 505 - Villa Crespo - CABA</label>
                        </a>
                    </Row>
                </Col>

                <Col className= "social">
                    <Row>
                        <a>
                            <img alt= "logo" src="https://www.flaticon.es/premium-icon/icons/svg/2168/2168281.svg" style={{ width: "50px" }}  />
                            <label>Seguinos en Facebook</label>
                        </a>
                    </Row>
                    <Row>
                        <a>
                            <img alt= "logo" src="https://www.flaticon.es/premium-icon/icons/svg/2175/2175203.svg" style={{ width: "50px" }} />
                            <label>Seguinos en Twitter</label>
                        </a>
                    </Row>
                    <Row>
                        <a>
                            <img alt= "logo" src="https://www.flaticon.es/premium-icon/icons/svg/2168/2168302.svg" style={{ width: "50px" }} />
                            <label>Seguinos en Instagram</label>
                        </a>
                    </Row>
                </Col>
                <Col>
                   
                </Col>

            </Row>
        </Container>
    )

}

export default Foot;