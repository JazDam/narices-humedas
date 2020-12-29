import React,{useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default (props) => {

    const [terminoBuscado, setTerminoBuscado] = useState('');

    const handleTerminoBuscadoChange = (event)=>{

        let busqueda = event.target.value;
        setTerminoBuscado(busqueda);

        props.onSearchProducto(busqueda);
    }

    return(

        <>

        <Row className="my-3 justify-content-center m-0">
        
        <Col xs={12} md={6} lg={5}>

            <Form >
                <Form.Group>
                    <Form.Row>

                        <Col sm={10} xs={9}>
                            <Form.Control type="text"
                                          value={terminoBuscado}
                                          onChange={handleTerminoBuscadoChange} 
                                          className= "FormControl"    
                            />
                        </Col>

                        <Col sm={2} xs={3}>
                        <FontAwesomeIcon color="dark" icon={faSearch} style={{ marginRight: "5px", marginTop: "5px" }} />
                        </Col>

                    </Form.Row>
                </Form.Group>
            </Form>

        </Col>

       </Row>
       </>

    )
}