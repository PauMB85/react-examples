import React from 'react';

/**
 * Para pasar datos siempre se realiza de forma descendente, por lo tanto, la información se pasa del componente 
 * Padre al componente hijo. NUNCA al revés
 * Para este ejemplo se le pasa al componente UsoProps una propiedad título. 
 */

const UsoProps = props => {
    return (
        <h1>
           {props.titulo} 
        </h1>
    );
};

export default UsoProps;