# TUTORIAL SOBRE Javascript

## CLASES M1

**CLASE-2:** Entrará la siguiente lista de conocimientos:

1. **Syntax Parser**
2. **lexical environment (Entorno léxico)**
2. **Valores y referencias**
3. **Hoisting (Elevación)**
4. **Operadores**
5. **Execution context (Contexto de Ejecución)**
6. **Execution stack (Pilas de ejecución)**
7. **Call-back (Devolver la llamada)**
8. **Coerción de datos**
9. **First class function**
10. **This**
11. **Ejercicios this**
12. **Scope ( alcance )**

## Syntax Parser:
  Es un tipo de interprete automático en javascript ejemplo:

~~~
    function hola() {
        let como = 'comida';
    }
~~~

Acá el código esta todo bien escrito. Un ejemplo de sintax-parser sería lo sgte:

~~~
    functionz hola(){ <!-- Sintax Error (aca está mal escrito ) -->
        lets como = 'comida'; <!--Sintax Error (esta mal escrito) --> 
    }
~~~

Lo que hace es el que traduce de forma automática nuestro código al lenguaje de máquina, cosa que la máquina aca nos dice de forma automática donde esta nuestro error o en que estamos fallando.

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

Ahora cuando declaramos diferentes variables y le cambiamos el valor por el valor de otra variable ya definida estos dos ocupan diferentes espacio en la máquina para que cada uno tenga según el valor que debe de tener.

Los primeros ejemplo son lo normal cambia valor de uno pero no de los dos y tal como es aparece en (console.log) pero ya en los objetos cambia la cosa.

Ya que en los objetos no tiene cada variable sus espacios sino que apuntan a la misma referencia del valor del que se indicó.
