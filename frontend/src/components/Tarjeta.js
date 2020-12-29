import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../css/Tarjeta.css';



export default (props) =>{

    const handleEditClick = ()=>{
        props.onEditClick(props.id);
    }

    const handleDeleteClick = ()=>{
        props.onDeleteClick(props.id);
    }

    return(
        <Col className="tarjeta" md={4} lg={4} xl={4} className="mb-5 text-center d-flex align-items-stretch justify-content-center">
        <Card className="tarjeta-cuerpo">
            <Link to=
            {"/animales/" + props.id} className="nav-link p-0 mt-3">
            
                <Card.Img variant="top" 
                src={props.imagen}
                />
                <Card.Body>
            
                    <Card.Title className="tarjeta-titulo" variant="dark">
                        {props.nombre}
                    </Card.Title>
                    {
                        props.type === 'animales' &&
                        <Button variant="light"> <FontAwesomeIcon color="dark" icon={faPaw} style={{ marginRight: "5px" }} />+ info</Button>
                    }
                </Card.Body>
            </Link>
            {
                props.type === 'mispublicaciones' &&

                        <Row>
                            <Col>
                            <Button variant="light"
                                    onClick={handleEditClick}
                            > <FontAwesomeIcon color="dark" icon={faEdit} style={{ marginRight: "5px" }} /></Button>

                            <Button variant="light"
                                    onClick={handleDeleteClick}
                            > <FontAwesomeIcon color="dark" icon={faTrash} style={{ marginRight: "5px" }} /></Button>
                            </Col>
                        </Row>

            }

        </Card>
    </Col>
    )
}
    







