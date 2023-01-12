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

>Ahora cuando declaramos diferentes variables y le cambiamos el valor por el valor de otra variable ya definida estos dos ocupan diferentes espacio en la máquina para que cada uno tenga según el valor que debe de tener.

>Los primeros ejemplo son lo normal cambia valor de uno pero no de los dos y tal como es aparece en (console.log) pero ya en los objetos cambia la cosa.

>Ya que en los objetos no tiene cada variable sus espacios sino que apuntan a la misma referencia del valor del que se indicó.

## Hoisting

El hoisting es el primer ejemplo de las cosas extras que hace el interprete sin que se lo pidamos. Ejemplo:

~~~
bar();
console.log(foo);

var foo = 'Hola, me declaro';
function bar(){
    console.log('Soy una función');
}
~~~

> Acá el ejemplo es que cuando hacemos algo hace de forma automática y en silencio java en que cuando usamos var copia en la parte de arriba la variable pero sin el valor dado.

> **MUY IMPORTANTE:** Que es una declaración?... ejemplo:

~~~
var foo = ' hola ';
~~~

> foo **ES UNA DECLARACIÓN SOLAMENTE** foo solo eso es la variable que le hemos declarado como foo.

## OPERADORES

Bueno los operadores obviamente son suma, resta multiplicación y los demás pero bueno no son mas que funciones los operadores, tenemos que verlos como funciones.

EJEMPLO DE PORQUE SON FUNCIONES:

~~~
var a = 2 + 3;

function suma(a, b){
    return a + b;
}

var a = sumar(2,3);
~~~

> **OJO:** tratar de entenderlo como funciones, porque verlos de esta manera vamos a poder entender como trabaja o hace la máquina o el lenguaje ya todo despúes se vuelve mas comprensible.


## Execution context (contexto de ejecución)

El contexto de ejecución contiene información sobre que código se está ejecutando en cada momento.
Además de mantener el código que tiene que ejecutar, también mantiene más información sobre donde se invocó ese código, en que lexical enviroment está, etc. EJEMPLO:

~~~
function person(){          //  execution context
    let first = 'Tony'; 
    let last = 'Sanchez';

function firstName(){       // execution context
        return first;
    }

    function lastName(){    // execution context
        return last;
    }

    alert( firstName() + '' + lastName() );
}
~~~

> **IMPORTANTE:** El execution context es que se ejecuta siempre y cuanndo se lo llame o invoque si no se ejecuta su mismo nombre lo dice.

> **OTRO DATO IMPORTANTE:** Lo primero que ejecuta son los objetos globales o tambien conocido contexto global.
