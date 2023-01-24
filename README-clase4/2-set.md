## SET (poner, conjunto)

Es lo mismo que el array sino que la diferencia es que con set hace que los valores ya repetidos que tengamos en nuestro arreglo no se colocarán:

Ejemplo:

~~~
var arreglo = [1,2,3,4,4,5,5,1,2];

var set1 = new Set(arreglo);

console.log(arreglo);   //[1,2,3,4,4,5,5,1,2]

console.log(set1);   // [1,2,3,4,5]
~~~

**PARA AÑADIR ALGÚN VALOR A NUESTRO ARREGLO:**

~~~

set1.add(15);

console.log(set1);  // [1,2,3,4,5,15];
~~~

## CLASE

Las clases son "funciones especiales", como las expresiones de funciones y declaraciones de funciones, la sintaxis de una clase tiene dos componentes: expresiones de clases y declaraciones de clases.

> ENLACE: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

**EJEMPLO:**

~~~
function Stack() {
    this.arr = []
}

Stack.prototype.add = function(element) {
    this.arr.push(element);
}

Stack.prototype.remove = function() {
    this.arr.pop();
}


let nuevoStack = new Stack();

nuevoStack.add('first');
nuevoStack.add('second');

console.log(nuevoStack.arr)
~~~
