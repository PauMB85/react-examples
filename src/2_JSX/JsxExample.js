import React, { Component } from 'react';


/**
 * Jsx permite escribir código html dentro del js, incluso permite escribir
 * código js dentro del html
 */

class JsxExample extends Component {
    render() {
        const hello = {
            nombre: 'Pau'
        }
        return (
            <div className="contenedor">
                <h1>Ejemplo JSX</h1>
                <p>Hello {hello.nombre}</p>
            </div>
        );
    }
}

export default JsxExample;