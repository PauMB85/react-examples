import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ShoppingList from './1_shopping_list/ShoppingList';
import JsxExample from './2_JSX/JsxExample';
import PrimerComponente from './componentes/01_PrimerComponente';
import Description from './componentes/class_function_component/Description';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ShoppingList name="Pau"/>,document.getElementById('shoppinglist'));
ReactDOM.render(<JsxExample/>,document.getElementById('jsxexample'));
ReactDOM.render(<PrimerComponente/>, document.getElementById('primercomponente'));
ReactDOM.render(<Description/>, document.getElementById('description'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
