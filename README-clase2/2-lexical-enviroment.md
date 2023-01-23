## Lexical Enviroment (En torno Léxico):
  Hace como un tipo de listado de todo lo que nosotros declaremos ejemplo:

~~~
function hola(){
    var foo = 'hello!';
}

var sec = 'como estás?';
~~~

Lo que hace lexical es que tenga una lista de todo lo que hemos declarado ejemplo:

~~~
    Listado lexical-enviroment:

    var foo;
    var sec;
    hola();
~~~

(Tenemos declarado 2 variables foo, sec, también una function declarado como " hola "), es una lista de orden de ejecución.