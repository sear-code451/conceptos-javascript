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

## Execution Stack ( Pila de ejecución )

Lo que hace es que ordena en la manera que serán ejecutados los diferentes contexto de ejecución.

Un ejemplo en la manera que lo ordena:

~~~
function b(){               TERCERO en la pila(primero en ser ejecutado);
    console.log('soy b');
};

function a(){               SEGUNDO en la pila(segundo en ser ejecutado.
    b();
}

a();                         PRIMERO en la pila (ultimo en ser ejecutado)
~~~

> La manera que lo ordena es de abajo hacia arriba una vez terminado de saber todos los contexto de ejecución, los va ejecutando de arriba hacia abajo.

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

## Coerción de datos

Bueno es como que el valor se le puede dar según el dato que querrás convertirlo. Ejemplo:

~~~
number('3');  // esto se lo va poder convertir a 3 obviamente.

number(false);  // esto lo va va convertir a 0.

number(true);   // esto lo va convertir a 1.

number(undefined);  // esto lo va convertir a Nan (not a number).

number(null);   // esto lo convierte a un 0 el porque bueno así lo definió Javascript.
~~~

EJEMPLO EN EJERCICIO:

~~~
3 + '3' = 33    // lo está concatenando. lo convierte como que a string el numero.

3 - '3' = 0     // simmplemente resta lo convierte a numero el string.

3 - true = 2    // como dijimos si queremos convertirlo a numero el true entonces (true vale 1) mirar arriba para entenderlo mejor.

3 - false = 3   // como dijimos (false vale 0) asi que es como decir (3 - 0).

true + true = 2 // porque true son 1 en valor numerico asi que los convierte a numerico porque de forma booleana no tiene sentido.
~~~

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

## THIS (éste, esta, esto)

Bueno this es como que valor de otro lado puede ocupar... pero el this si no tiene un método quien lo guía como (objeto.bind), entonces sin esto que los indique el this busca al mas cercano de su mismo nivel o un nivel mas arriba, si no existe ya un nivel mas entonces en el global busca.

EJEMPLO:

~~~
function quiensoy(){
    console.log('Hola, yo soy:', this);
}

quiensoy(); // undefined o te saldra global.
~~~

OTRO EJEMPLO:

~~~
const sasha = {
    nombre: 'sasha',

    saludar: function (){
        console.log('hola, me llamo ' + this.nombre );
    },

    hermano:{
        nombre: 'Eric',
        saludar: function (){
            console.log('yo el hermano, me llamo ' + this.nombre);
        }
    }
}

sasha.saludar();
sasha.hermano.saludar();
~~~

## EJEMPLOS MAS COMPLEJOS DE THIS:

~~~
const sasha = {
    nombre: 'Sasha',
    twitter: '@pablo',
    saludar: function (){
        function seguimeEnTwitter(){
            console.log('Seguime en Twitter: ' + this.twitter);
        }
    

        console.log('Hola, me llamo ' + this.nombre);
        seguimeEnTwitter();
    }

}

sasha.saludar();
~~~

> Este ejercicio está mal una parte debido a que no imprimirá twitter.

>Para que salga bien se verá en el siguiente ejercicio.

~~~
const sasha = {
    nombre: 'Pablo',
    twitter: '@pablo',
    saludar: function(){
        console.log('Hola, me llamo ' + this.nombre);
        this.seguimeEnTwitter();
    },

    seguimeEnTwitter: function(){
        console.log('Seguime en Twitter: ' + this.twitter);
    }

}

sasha.saludar();
~~~

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


## BIND (enlazar)

Bind lo que hace es que nos ayuda a donde debemos de apuntar el this en que función o donde queremos que se vea para usarlo, y también para dar valor a los parámetros; bueno mirar el los ejemplos para entender mejor.

> Bind acepta más parámetro, el primero siempre es el ( this ), los sgtes sirven para bindear parámetros de una función.

> DATO IMPORTANTE: bind para invocarlo necesitan llamarlo primero. EJEMPLO:

~~~
var persona = {
    nombre: 'Pedro',
    apellido: 'Perez'
}

var logNombre = function() {
    console.log(this.nombre);
}

var logNombrePersona = logNombre.bind(persona);

logNombrePersona(); 	// imprime this.nombre de persona osea: 'Pedro'
~~~

~~~
function multiplica (a,b) {
    return a * b;
}

var multiplicaPorDos = multiplica.bind(this, 2);

 multiplicaPorDos() // coerción de datos tenemos 2 * b ya que b aún no se le ha pasado un valor asi que nos va dar Nan
~~~

~~~
 function saludar(saludo, nombre) {
    console.log(saludo + ' ' + nombre );
 }

 saludar('hola', 'Pablo'); // hola Pablo

 var saludarEnChino = saludar.bind(this, 'nihao');

 saludarEnChino('Emanuel'); // nihao Emanuel

 var saludarEnAleman = saludar.bind(this, 'guten tag', 'Luisa');

 saludarEnAleman(); // guten tag Luisa
~~~

~~~
 var gentecito = { nombre: 'Pablo' };

 function saludar2(saludo) {
    console.log(saludo + ' ' + this.nombre );
 }

 var saludarPabloEnItaliano = saludar2(gentecito, 'Buongiorno');

 saludarPabloEnItaliano();  // Buongiorno Pablo

 // el porque de  que salga eso fácil apunta el this en gentecito, y el Buongiorno es el argumento del parámetro de la función.
~~~


## CALL ( Llamar )

Call lo que hace, es lo mismo que bind pero la diferencia es que invoca la función; no crea o devuelve otra función.

**EJEMPLO:**

~~~
var gentecito = {nombre: 'Pablo'};

function saludar3(saludar){
    console.log(saludar + ' ' + this.nombre);
}

let nuevoSaludo = saludar3.call(gentecito,'Hello');
~~~


## APPLY ( aplicar )

Bueno es lo mismo que call este se invoca, no hay necesidad de llamarlo en otra función este mismo los invoca en ese momento.

**EJEMPLO:**

~~~
var logNombre = function(arg1, arg2) {
    console.log( arg1 + ' ' + this.nombre + ' ' + arg2 );
}

logNombre.apply(persona, ['Hola', ', como estas?']);
~~~


## Recursión

Una recursión es cuando se llama a sí misma la función y cumple los siguientes requisitos en su mayoría:

- Se llama a sí misma ( si o si porque si no no es recursión ).
- Tiene una condición de corte ( el if del ejemplo para que no sea un bucle infinito ).
- En general el argumento con el cual se llama a la función es nuevamente distinto al del argumento original.

> Un ejemplo es como hacer factorial, vamos a pillar 2 formas de hacerlo uno es el más facil, y el otro haciendo uso de recursión:

~~~
result = 1;

function factorial(num) {
    for(let i = 1; i <= num; i++) {
        result = i * result;
    }
    return result;
}

factorial(4);  // 24
~~~

> El siguiente es haciendo ya recursión el ejemplo de arriba es solo una función normal.

~~~
function factorialRec(num) {
    if(num <= 1) return 1
        return num * factorialRec( num - 1 );
}

console.log(factorialRec(4));
~~~

**VAMOS A EXPLICAR PASO A PASO LO QUE ESTÁ PASANDO EN LA RECUSIÓN DE ARRIBA:**

> secuencia: 4! = 1 x 2 x 3 x 4

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

Lo que está haciendo if es lo sgte:

es que va hacer una recursión osea pregunta si es menor si cumple lo que dice el if entonces va retornar 1  tipo while pero la diferencia es que aca nosotros sabemos cuando va acabar.

**OJO:** ES IMPORTANTE PONERLE UN STOP UN PUNTO LÍMITE SINO ESTO SE HARIA UN BUCLE

**PROCESO DE LO QUE HACE EL IF :**

pregunta si num (4) es menor o igual que 1 // la respuesta es false

entonces lo que hace es lo de abajo

ahora lo de abajo hace que (4) * factorialRec( 4 - 1 );

esa parte donde se llama a sí misma crea como un stack context una pila de ejecución

para que se entienda el primero en entrar a la pila será con el num (4)

pero será el último en ser ejecutado entonces hasta que no se termine de colocar todos en la pila aún no pueden ser ejecutados

PROCESO EN QUE ORDEN VA ENTRANDO EN LA PILA DE EJECUCION:
1º            pregunta 4 es menor o igual que 1  // false = osea continua
    (4) * factorialRec( 4 - 1 );

2º            pregunta 3 es menor o igual que 1  // false = osea continua
    (3) * factorialRec( 3 - 1 );

3º            pregunta 2 es menor o igual que 1  // false = osea continua
    (2) * factorialRec( 2 - 1 );

4º       pregunta 1 es menor o igual que 1   // true = osea va retornar 1
            1


PROCESO DE COMO VAN SIENDO EJECUTADOS LOS CONTEXTO DE EJECUCION QUE ESTABAN EN LA PILA DE EJECUCION:

1º (primero en ser ejecutado)

    return 1
    1

2º (segundo en ser ejecutado)

    return (2) * factorialRec( 1 );
    return 2 * 1;   //2
    2

3º (tercero en ser ejecutado)

    return (3) * factorialRec( 3 - 1 );
    return  3 * 2;      // 6
    6

4º (cuarto en ser ejecutado)

    return (4) * factorialRec( 4 - 1 );
    return 4 * 6;   // 24
    24