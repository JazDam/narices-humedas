import React, {useState, useEffect, useRef} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default props =>{

    const [categorias, setCategorias] = useState([{id:'', nombre:'todas'}]);

    const categoriaRef = useRef('null');
    const precioDesdeRef = useRef('null');
    const precioHastaRef = useRef('null');
    const ordenRef = useRef('null');




    useEffect( ()=>{
        fetch('http://localhost:8888/categorias').then(
            response => response.json()
        ).then(
            dataCategorias =>{
                setCategorias(dataCategorias);
            }
        )
    }, [])

    const categoriasOption = ()=>{

        let categories = categorias.map(categoria =>{
            return(
                <option value={categoria.id}>
                  {categoria.nombre}
                </option>
            )
        })

        categories.unshift(<option value=''>
                            Todas
                           </option>);
        return categories;
    }

    const handleFilterChange = ()=>{

        props.onFilterChange(
            {
                categoria: categoriaRef.current.value,
                precioDesde: precioDesdeRef.current.value,
                precioHasta: precioHastaRef.current.value,
                orden: ordenRef.current.value
            }
        )
    }

    return(
           
        <>
        <Row style= {{backgroundColor: "#2ed1b5"}}className= "my-3 justify-content-center m-0  p-3">
            <Col xs={12} md={11} lg={8}>
            <Form>
                <Row>
                <Col xs={12} md={5}>
                <Form.Group>
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control as="select"
                                  onChange={handleFilterChange}
                                  ref={categoriaRef}
                                  className= "FormControl" >
                        {categoriasOption()}
                    </Form.Control>
                </Form.Group>
                </Col>

                <Col xs={7} md={4}>
                <Form.Label>Precio</Form.Label>
                <Form.Row>
                    <Col xs={5}>
                    <Form.Control type="number"
                                  placeholder="Desde"
                                  ref={precioDesdeRef}
                                  className= "FormControl">
                    </Form.Control>
                    </Col>

                    <Col xs={5}>
                    <Form.Control type="number"
                                  placeholder="Hasta"
                                  ref={precioHastaRef}
                                  className= "FormControl">
                    </Form.Control>
                    </Col>
                    
                    <Col xs={2}>
                    <Button variant="light"
                            onClick={handleFilterChange}
                            className= "FormControl">
                        >
                    </Button>
                    </Col>
                </Form.Row>
                </Col>

                <Col xs={5} md={3}>
                <Form.Group>
                    <Form.Label>Orden</Form.Label>

                    <Form.Control as="select"
                                  onChange={handleFilterChange}
                                  ref={ordenRef}
                                  className= "FormControl">
                        <option value="menor_precio">Menor precio</option>
                        <option value="mayor_precio">Mayor precio</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                </Row>
            </Form>
            </Col>
        </Row>
        </>
    )
}