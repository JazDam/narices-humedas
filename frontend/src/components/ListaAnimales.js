import React, { useState, useEffect } from 'react';
import Tarjeta from './Tarjeta';
import Row from 'react-bootstrap/Row';
import NavbarMisPublicaciones from './NavbarMisPublicaciones';
import '../css/ListaAnimales.css';
import AnimalEditModal from './AnimalEditModal';
import Swal from 'sweetalert2';


const ListaAnimales = (props) => {

    const [animales, setAnimales] = useState([])

    const [showAnimalEditModal, setShowAnimalEditModal] = useState(false);

    const [selectedAnimal, setSelectedAnimal] = useState(null);



    const handleHideAnimalEditModal = () => {
        setSelectedAnimal(null);
        setShowAnimalEditModal(false);
    }

    const onShowAnimalEditModal = () => {
        setSelectedAnimal(null);
        setShowAnimalEditModal(true);
    }
    const handleAnimalSaved = (message) => {
        setShowAnimalEditModal(false);
        cargarListaAnimales();

        Swal.fire({
            text: message,
            icon: 'success'
        })
    }

    let endpoint = 'animales';

    if (props.user && props.type === 'mispublicaciones') {
        endpoint = 'animales/user/' + props.user.id;
    }

    const cargarListaAnimales = () => {

        fetch(`http://localhost:8888/${endpoint}`)
            .then(response => response.json())
            .then(data => { setAnimales(data) })
    }

    useEffect(cargarListaAnimales, []);

    const handleEditClick = (idAnimal) =>{
        setSelectedAnimal(idAnimal);
        setShowAnimalEditModal(true);
    }
    
    const handleDeleteClick = (idPublicacion) =>{
       Swal.fire({
           title: '¿Estas seguro de eliminar la publicación?',
           icon: 'question',
           showCancelButton: true,
           confirmButtonText: 'aceptar',
           cancelButtonText: 'cancelar'
       }).then(result =>{
           if(result.value){
               fetch(`http://localhost:8888/animales/${idPublicacion}`, {
                   method: 'DELETE',
                   credentials: 'include'
               }).then(
                   response => response.json()
               ).then(
                   data =>{
                       if(data.status === 'ok'){
                           Swal.fire({
                            text: data.message,
                            icon: 'success'
                         });

                         cargarListaAnimales();
                         
                        }else{
                            Swal.fire({
                                text: data.message,
                                icon: 'error'
                            })
                        }
                   }
               )
           }
       })
    }


    return (
        <>
            {
                props.type === 'mispublicaciones' &&
                <NavbarMisPublicaciones handleShowAnimalEditModal={onShowAnimalEditModal} />
            }

            {
                props.type === 'animales' &&
                <>
                    <h1 className= "mb-5">nuestros amigos buscan un hogar</h1>
                </>
            }

            <Row className= "m-4">

                    {
                        animales.map(animal => {
                            return (
                                <Tarjeta
                                    nombre={animal.nombre}
                                    imagen={animal.imagen}
                                    id={animal.id}
                                    type={props.type}
                                    onEditClick={handleEditClick}
                                    onDeleteClick={handleDeleteClick}

                                />
                            )
                        }
                        )
                    }
                    
            </Row>

            {
                props.type === 'animales' &&
                <>
                    <h1 className= "mb-5">vos tambien podes hacer tus publicaciones, solo necesitas registrarte e ingresar!</h1>

                    <hr></hr>
                </>
            }
             

            <AnimalEditModal show={showAnimalEditModal}
                handleHide={handleHideAnimalEditModal}
                onAnimalSaved={handleAnimalSaved}
                idAnimal={selectedAnimal}

            />
        </>

    );

}

export default ListaAnimales;