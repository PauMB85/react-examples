import React, { Component } from 'react';


/**
 * ShoppingList es un componente con un parámetro (name) con un método 'render'
 * que devuelve una descripción de lo que se quiere visualizar en la pantalla.
 */

class ShoppingList extends Component {
    render() {
        return (
            React.createElement('div',{className: 'shopping-list'}, 
                React.createElement('h1',null, 'Shopping List for ', this.props.name),
                React.createElement('ul',null, 
                    React.createElement('li',null,'Instagram'),
                    React.createElement('li',null,'WhatsApp'),
                    React.createElement('li',null,'Oculus')
                )
            )
        );
    }
}

export default ShoppingList;