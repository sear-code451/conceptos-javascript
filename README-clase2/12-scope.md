## Scope (Alcance)

Bueno el scope es hasta donde es nuestro alcance, o mejor dicho cual es nuestro conjunto de variable, objetos y funciones de cual tenemos acceso desde un determinado contexto de ejecución en el que estoy. EJEMPLO:

~~~
var global = 'Hola!';

function a(){
    console.log(global);
    global = 'Hello';
}

function b (){
    var global = 'Chau';
    console.log(global);
}

a();
b();
console.log(global);
~~~
