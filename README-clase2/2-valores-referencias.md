## Diferencias entre valores y referencias

Bueno ya entendemos que son valores sino lograste entender mirar el sgte ejemplo:

~~~
var hola = 'hello';     // el valor de la variable hola es 'hello';
~~~

Ahora las referencia son otra cosa para entender cuando hay una referencia mirar el siguiente ejemplo:

~~~
var a = 10;
var b = a;

console.log(a);     // 10
console.log(b);     // 10

a = 20;

console.log(a);     // 20
console.log(b);     // 10

var c = {
    nombre: 'Juana'
}

var d = c;

console.log(c);     // 'Juana'
console.log(d);     // 'Juana'

c.nombre = 'Maria';

console.log(c);      // 'Maria'
console.log(d);      // 'Maria'

d.nombre = 'Pedro';

console.log(c);       // 'Pedro'
console.log(d);       // 'Pedro'
~~~

>Ahora cuando declaramos diferentes variables y le cambiamos el valor por el valor de otra variable ya definida estos dos ocupan diferentes espacio en la máquina para que cada uno tenga según el valor que debe de tener.

>Los primeros ejemplo son lo normal cambia valor de uno pero no de los dos y tal como es aparece en (console.log) pero ya en los objetos cambia la cosa.

>Ya que en los objetos no tiene cada variable sus espacios sino que apuntan a la misma referencia del valor del que se indicó.