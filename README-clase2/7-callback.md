## CallBack (Devolver la Llamada)

Es una función en la cual es utilizada como parámetro en otra   función. Ejemplo:

~~~
function mensaje(nombre){
    console.log('Hola', nombre);
}

mensaje('Luis');
~~~

> IMPORTANTE: un parámetro son los valores que le damos a una función.

OTRO EJEMPLO MAS COMPLETO PERO ES MAS COMPLETO PARA ENTENDER:

~~~
function saludo(){
    console.log('estoy en el callback');
}

let fn = function(cb){
    cb();

    return function(){
        console.log('estamos dentro de la función');
    };
}

fn(saludo)();
~~~
