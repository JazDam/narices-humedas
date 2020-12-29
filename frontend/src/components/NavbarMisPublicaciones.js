import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

export default props =>
    <Row className= "my-3 ml-4">
        <Col>
            <Button variant= "light" onClick= {props.handleShowAnimalEditModal}>
                <FontAwesomeIcon color="dark" icon={faPaw} style={{ marginRight: "5px" }} /> 
                nueva publicación
            </Button>
        </Col>
    </Row>