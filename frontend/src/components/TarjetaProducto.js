import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import iconoNoFavorito from '../no_favorito.png';
import iconoFavorito from '../favorito.png';
import { Link } from 'react-router-dom';
import '../css/tarjetaProducto.css';


export default (props) => {

    const handleFavClick = () => {
        props.onChangeFavStatus(props.isFav, props.id, props.user.id);
    }

    return (

       
            <Col md={4} lg={3} xl={2} className="mb-5 text-center d-flex align-items-stretch  justify-content-center">
                <Card className=" target">
                    <Card.Body>

                        {(props.type === 'productos' || props.type === 'favoritos') &&
                            props.user &&
                            < img style={{ cursor: "pointer" }}
                                src={props.isFav ? iconoFavorito : iconoNoFavorito}
                                onClick={handleFavClick}
                            />
                        }

                        <Link to=
                            {"/productos/" + props.id} className="nav-link p-0 mt-3">
                            <Card.Title  style={{fonSize:"0.8rem", color: "black"}}  className="mb-5">
                                {props.producto}
                            </Card.Title>
                            <img
                                src={props.img}
                                className="card-img-top">
                            </img>
                        </Link>
                    </Card.Body>
                    <div className="precio"> $ {props.precio}</div>

                </Card>

            </Col>
        

    )
}