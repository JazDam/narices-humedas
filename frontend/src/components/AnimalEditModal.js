import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

export default props =>{

    const [animalName, setAnimalName] = useState('');
    const [animalEdad, setAnimalEdad] = useState('');
    const [animalSex, setAnimalSex] = useState('');
    const [animalImage, setAnimalImage] = useState('');
    const [previewAnimalImage, setPreviewAnimalImage] = useState('');

    const handleAnimalNameChange = (event)=>{
        setAnimalName(event.target.value);
    }
    const handleAnimalEdadChange = (event)=>{
        setAnimalEdad(event.target.value);
    }
    const handleAnimalSexChange = (event)=>{
        setAnimalSex(event.target.value);
    }
    const handleAnimalImageChange = (event)=>{
        setAnimalImage(event.target.files[0]);

        setPreviewAnimalImage( URL.createObjectURL(event.target.files[0]))
    }
    

    const handleSave = ()=>{

        const formData = new FormData();

        formData.append('animalName', animalName);
        formData.append('animalEdad', animalEdad);
        formData.append('animalSex', animalSex);
        formData.append('animalImage', animalImage);

        let url = 'http://localhost:8888/animales';
        let method = 'POST';

        if(props.idAnimal){
            url += '/' + props.idAnimal;
            method = 'PUT';
        }

        fetch(url, {
            method: method,
            body: formData,
            credentials: 'include'
        }).then(response => response.json())
        .then(data => {

            if(data.status === 'ok'){

                props.onAnimalSaved(data.message);

            }else{

               Swal.fire({
                   text: data.message,
                   icon: 'error'
               })
            }
        })
        .catch(error => {
            console.log('error');
        })
    }

    useEffect(
        ()=>{
            if(props.idAnimal){
                
               fetch(`http://localhost:8888/animales/` + props.idAnimal).then(
                   response => response.json()
               ).then(
                   data =>{
                       setAnimalName(data.nombre);
                       setAnimalEdad(data.edad);
                       setAnimalSex(data.sexo);
                       setAnimalImage('');
                       setPreviewAnimalImage(data.imagen);
                   }
               )

            }else{
                setAnimalName('');
                setAnimalEdad('');
                setAnimalSex('');
                setAnimalImage('');
                setPreviewAnimalImage('');
            }
        }, [props.idAnimal]
    )

    return(
        <Modal show= {props.show} onHide= {props.handleHide}>

        <Modal.Header closeButton>
            <Modal.Title>Publicación</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>nombre</Form.Label>
                    <Form.Control type="text"
                                  value={animalName}
                                  onChange={handleAnimalNameChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>edad</Form.Label>
                    <Form.Control type="text"
                                  value={animalEdad}
                                  onChange={handleAnimalEdadChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>sexo</Form.Label>
                    <Form.Control type="text"
                                  value={animalSex}
                                  onChange={handleAnimalSexChange}
                    />
                </Form.Group>

                <Form.Group className= "d-flex justify-content-center">
                   { previewAnimalImage &&
                        <img style= {{height: "25vh"}} src={previewAnimalImage} />
                   }
                </Form.Group>

                <Form.Group>
                    <Form.Label>imagen</Form.Label>
                    <Form.Control type="file"
                                  onChange={handleAnimalImageChange}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant= "light"
            >
                cancelar
            </Button>
            <Button variant= "light"
                    onClick={handleSave}
            >
                guardar
            </Button>
        </Modal.Footer>

    </Modal>
    )
}