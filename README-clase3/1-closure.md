## CLOSURE (clausura, pronunciación: clousheer)

Es como la combinación de la función de una función y del ambiente léxico donde esa función fue declarada.

> Bueno en otras palabras es que una closures es una función que está dentro de otra función, ahora esta usa los valores que le dió en la función de adentro, a eso nosotros le declaramos que es una closure o lo identificamos que es una closures; mirar el ejemplo como usa el valor del parámetro la function que está dentro de él. Ahora si no usa los valores de la función en donde está dentro entonces no es una closures.

EJEMPLO:

~~~
function saludar (saludo){
    return function( nombre ) {
        console.log( saludo + " "  + nombre );
    }
}

var saludarHola = saludar('Hola');
saludarHola('Toni');
~~~

OTRO EJEMPLO MÁS COMPLICADO (supuestamente):

~~~
var crearFunction = function() {
    var arreglo = [];

    for ( let i = 0; i < 3; i++ ) {
        arreglo.push(
            function() {
                console.log(i);
            }
        )
    }

    return arreglo;

}

var arr = crearFunction();

arr[0]();       
arr[1]();       
arr[2]();
~~~

>la respuesta va salir 3 para todos los de ahí arriba como resultado.

>porque 3?...bueno porque lo que hace es lo sgte la función:

>va guardando en el arreglo una función y dentro de esa función tiene el console.log(i)

   [(){console.log(i)}, (){console.log(i)}, (){console.log(i)}]

Es 3 simplemente porque el arreglo se lo llama afuera del lexical del for entonces no podremos usar la variable (i) según el for sino según el último valor como quedo (i) que sería 3 porque aunque (i) aumento a 3 y no entro en for la variable (i) se quedo en 3 nomas.

~~~

var crearFunction = function () {
    var arreglo = [];
    for (let i = 0; i < 3; i++ ) {
        arreglo.push(
            (function (j) {
                return function () {
                    console.log(j);
                };
            })
        );
    }
    return arreglo;
}

var arr = crearFunction();

arr[0]();
arr[1]();
arr[2]();

*/
~~~
