import React, { Component, Fragment } from 'react';
import Producto from './Producto';

/**
 * La función principal de los state es la de almacenar datos de forma local en el componente. 
 * Estos datos pueden cambiar a lo largo del tiempo, por ejemplo durante la iteracción del usuario
 * IMPORTANTE: state es inmutable por lo tanto, no se podría realizar this.state.producto = ...
 * se tiene que utilzar el método this.setStsate y crear el objeto nuevo.
 */

class MyState extends Component {

    constructor(props){
        super(props);
        this.state = {
            productos : [
                {id: 1, name: 'Camisa', precio: 30},
                {id: 2, name: 'Vaquero', precio: 40},
                {id: 3, name: 'Zapato', precio: 50},
                {id: 4, name: 'Calcetin', precio: 5}
            ]
        }
    }

    render() {

        const {productos} = this.state;

        return (
            <Fragment>
                <h1>
                    Lista de Productos
                </h1>
                {productos.map(producto => (
                    <Producto 
                        key={producto.id} 
                        producto={producto}
                    />
                ))}
            </Fragment>
            
        );
    }
}

export default MyState;