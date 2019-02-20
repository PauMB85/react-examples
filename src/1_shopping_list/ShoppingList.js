import React, { Component } from 'react';


/**
 * contruccion de una lista mediante JSX
 * Que es JSX - es una extensión de JS y HMTL con lo que facilita escribir
 * código más limpio
 * Se utiliza el método React.createElement(tag,propiedades, contenido tag)
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