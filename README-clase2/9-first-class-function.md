## First class function

Bueno podemos pasar funciones como argumentos también podemos guardar funciones en variables o también podemos devolver kuna función dentro de otra función.

~~~
let fn = function(){
    return function() {
        console.log('function devuelta');
    };
};

let result = fn();

result();
~~~