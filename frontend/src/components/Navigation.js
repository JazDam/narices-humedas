
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/navigation.css';
import img from '../img/logoNarices-c.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navigation = (props) => {



    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleHideLoginModal = () => {
        setShowLoginModal(false);
    }

    const handleShowLoginModal = () => {
        setShowLoginModal(true);
    }

    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleHideRegisterModal = () => {
        setShowRegisterModal(false)
    }

    const handleShowRegisterModal = () => {
        setShowRegisterModal(true);
    }


    return (
        <>
            <Navbar className="navigation" expand="lg">

                <Link to={"/"} className="navbar-brand" >
                    <img alt="logo" className="logo" src={img}></img>
                    <Navbar.Text className="brand-texto">
                        narices húmedas
                    </Navbar.Text>

                </Link >

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto">

                        <Link to="/petshop" className="nav-link"> pet shop</Link>

                        {!props.user
                            ?
                            <>
                                <Button
                                    variant="light"
                                    onClick={handleShowLoginModal}
                                >
                                    <FontAwesomeIcon color="dark" icon={faPaw} style={{ marginRight: "5px" }} />
                                        ingresa
                            </Button>

                                <Button
                                    variant="light"
                                    onClick={handleShowRegisterModal}
                                >
                                    <FontAwesomeIcon color="dark" icon={faPaw} style={{ marginRight: "5px" }} />
                                   registrate
                                </Button>

                            </>

                            :
                            <>
                                        <Link to="/favoritos" className="nav-link ml-2">
                                        mis favoritos
                                        </Link>
                                        <Link to="/mispublicaciones" className="nav-link ml-2">
                                            mis publicaciones
                                        </Link>

                                <FontAwesomeIcon color="dark" icon={faPaw} style={{ marginTop: "12px" }} className="ml-2" />
                                <NavDropdown alignRight title={props.user.nombre} >

                                    <NavDropdown.Item>Mi cuenta</NavDropdown.Item>
                                    <NavDropdown.Divider />

                                    <NavDropdown.Item onClick={props.handleLogout}>
                                        cerrar sesión
                                    </NavDropdown.Item>


                                </NavDropdown>
                            </>
                        }

                    </Nav>

                </Navbar.Collapse>

            </Navbar>

            <LoginModal show={showLoginModal}
                handleHide={handleHideLoginModal}
                handleLoginSuccess={props.handleLoginSuccess}
            />
            <RegisterModal show={showRegisterModal}
                handleHide={handleHideRegisterModal}
            />

        </>

    )
}
export default Navigation;