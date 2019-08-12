This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## Componentes

Los componentes no ayudan a separar el código y los elementos de la IU en pequeñas piezas reutilizabkes que estaran estaran ailadas las unas con las otras. Dichos componentes en __React__ con definidas como funciones en JS,existes dos tipos. Además dichos componentes pueden recibir datos por medio de los __Props__, los datos se pasan del padre al hijo pero nunca al revés


Como hemos indicado anteriormente se pueden definir dos tipos de componentes:
* Functional component (comando rápido: rsc)
* Class Component (comando rápido: rcc)

### Class Component
Siempre tiene un método obligatorio que es el render, donde se devuelve el método return con el código html.

### Functional Component
* Ventajas:
     
     * Fáciles de crear y de leer.
     * Por su sencillez tiene menos código y por lo tanto, más fácil testearlo.
     * Muy útil para utilizarlo para componentes que no tiene nada de lógica, solo se encargan de renderizar.



* Desventajas (sin hooks):
    
    * No se pueden usar los métodos del __Ciclo de vida__.
    * No tiene __state__.
    * No pueden usar __refs__.

### Métodos del Ciclo de Vida

* Son métodos o funciones que se ejecutan automáticamente en el Componente. 
* Solo existen en Class Component
* Son eventos que ocurren desde que el componente es creado hasta que es destruido.

Los componente más utilizados son:

* componentDidMount. Este evento se lanza cuando el componente ha sido creado.
* componentWillMount. Este evento se ejecuta cuando el componente aun no ha sido creado.
* componentDidUpdate. Este método se ejecuta cuando hay alguna modificación en el componente.
* componentWillUnmount. Al quitar el componente se ejecuta dicho evento.



