import React, { useState, useEffect } from 'react';
import TarjetaProducto from './TarjetaProducto';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';
import ProductFilter from '../components/ProductFilter';
import Comprar from '../components/Comprar';

export default (props) => {

    const [productos, setProductos] = useState([]);

    const [favoritos, setFavoritos] = useState([]);

    const handleFilterChange = filtros => {

        props.onFilterChange(filtros);
    }

    const handleChangeFavStatus = (isFav, prodId, userId) => {

        let url = 'http://localhost:8888/favoritos';

        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('prodId', prodId);

        let method = isFav ? 'DELETE' : 'POST';

        fetch(url, {
            method,
            body: formData,
            credentials: 'include'
        }).then(response => response.json())
            .then(data => {
                cargarListaProductos();

                Swal.fire({
                    title: data.message,
                    icon: 'success'
                })
            })
    }

    const cargarListaProductos = () => {

        let endpoint = 'productos';

        const filterParams = new URLSearchParams(props.filtros);

        if (props.type === 'productos' && props.searchProducto) {
            endpoint += '/search/' + props.searchProducto;
        } else {
            if (props.user) {

                switch (props.type) {

                    case 'favoritos':
                        endpoint = 'favoritos/' + props.user.id;
                        break;
                }
            }
        }

        if (props.user) {
            //obtengo los favoritos
            fetch(`http://localhost:8888/favoritos/${props.user.id}`)
                .then(response => response.json())
                .then(
                    data => {
                        setFavoritos(data);

                        fetch(`http://localhost:8888/${endpoint}?${filterParams}`)
                            .then(response => response.json())
                            .then(
                                data => {
                                    setProductos(data);
                                }
                            )
                    }
                )

        } else {

            fetch(`http://localhost:8888/${endpoint}?${filterParams}`)
                .then(response => response.json())
                .then(data => {
                    setProductos(data);
                })
        }
    }

    useEffect(cargarListaProductos, [props.user, props.searchProducto, props.filtros]);

    const isUserFav = idProducto => {
        return (
            favoritos.filter(favorito => idProducto === favorito.id).length);
    }

    return (

        <>

            <ProductFilter onFilterChange={handleFilterChange} />

            <Row className="m-4">
                {
                    productos.map(producto => {
                        return (
                            <TarjetaProducto
                                id={producto.id}
                                categoria={producto.categoria}
                                producto={producto.producto}
                                precio={producto.precio}
                                img={producto.img}
                                type={props.type}
                                user={props.user}
                                isFav={isUserFav(producto.id)}
                                onChangeFavStatus={handleChangeFavStatus}
                            />
                        )
                    })
                }

            </Row>

            <Comprar/>

        </>
    )
}