import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

class Description extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent />
                <FunctionalComponent />
                <h2>Descripción</h2>
                <p>El class component y el functional component funcionan por igual.
                    Lo ideal es utilizar el functional component cuando no se necesite:
                </p>
                <ul>
                    <li>state</li>
                    <li>ciclo de vida del componente</li>
                    <li>formularios</li>
                </ul>
            </div>
        );
    }
}

export default Description;