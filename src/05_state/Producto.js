import React from 'react';

/**
 * en este ejemplo de functional component en el apartado props asignamos por destructuring.
 * El destructuring hace posible la extracción de datos de arrays u objetos usando la sintaxis que equivale a la construcción
 * del array y objetos.
 * 
 * @param {producto} props 
 */


const Producto = ({producto}) => {
    return (
        <div>
            {producto.name}
        </div>
    );
};

export default Producto;