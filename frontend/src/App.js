import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ImagenyTexto from './components/ImagenyTexto';
import Donacion from './components/Donacion';
import ListaAnimales from './components/ListaAnimales';
import AnimalDetail from './components/AnimalDetail';
import Foot from './components/Foot';
import ProductSearch from './components/ProductSearch';
import ListaProductos from './components/ListaProductos';
import ProductDetail from './components/ProductDetail';
import Slider from './components/Slider';
import TextoEimagen from './components/TextoEimagen';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


function App() {

  const [usuario, setUsuario] = useState(null);

  const [searchProducto, setSearchProducto] = useState('');

  const [filtros, setFiltros] = useState({
     
    categoria: '',
    precioDese: '',
    precioHasta: '',
    orden: 'menor_precio'
  })

  const onLoginSuccess = (loggedUser) => {
    setUsuario(loggedUser);
  }

  const onLogout = () => {
    let url = 'http://localhost:8888/auth';

    fetch(url, {
      method: 'DELETE',
      credentials: 'include'
    }).then(response => response.json())
      .then(data => {
        setUsuario(null);
      })
  }

  const handleSearchProducto = (terminoBuscado) =>{
    
    if(terminoBuscado === ''){
      terminoBuscado = null;
    }

    setSearchProducto(terminoBuscado);
  }

  const handleFilterChange = filtros =>
  setFiltros(filtros);

  return (

    <Router>
      <Navigation user={usuario}
        handleLoginSuccess={onLoginSuccess}
        handleLogout={onLogout}
      />
      <Switch>
        <Route exact path="/"
          children={
            <>
              <ImagenyTexto />

              <ListaAnimales type="animales"
                             user={usuario} />

              <Donacion />
            </>
          }
        />

        <Route exact path="/animales/:id"
          children={<AnimalDetail />}
        />

        {usuario &&
          <Route exact path="/mispublicaciones"
            children={
              
              <ListaAnimales
               user={usuario}
              type="mispublicaciones" 
              />
              
            }
          />
        }

        <Route exact path="/petshop"
          children={
            <> 
              <ProductSearch
              onSearchProducto={handleSearchProducto}
              />

              <Slider />
              <TextoEimagen/>
              
              <ListaProductos
              type="productos"
              user={usuario} 
              searchProducto={searchProducto}
              filtros={filtros}
              onFilterChange={handleFilterChange}
            />
            </>
          } />

        <Route exact path="/productos/:id"
          children={<ProductDetail />}
        />
        
        { usuario &&
          <Route exact path= "/favoritos"
          children={
            <>
            <h1>Mis productos favoritos</h1>
            <ListaProductos type="favoritos"
                            user={usuario}
                            searchProducto={searchProducto}
                            filtros={filtros}
                            onFilterChange={handleFilterChange}
            />
            </>
          }
   />
        }

        <Redirect to={{ pathname: '/' }} />

      </Switch>

      <Foot />

    </Router>
  )

}
export default App;
