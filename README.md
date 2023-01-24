# TUTORIAL SOBRE Javascript

[**Enlace a tutorial avanzado a mark down**](https://github.com/ricval/Documentacion/blob/master/Guias/GitHub/mastering-markdown.md#introducci%C3%B3n)ñ

## CLASES M1

**CLASE-2:** Entrará la siguiente lista de conocimientos:

1. [**Syntax Parser**](/README-clase2/1-sintax-parser.md)
2. [**lexical environment (Entorno léxico)**](/README-clase2/2-lexical-enviroment.md)
2. [**Valores y referencias**](/README-clase2/2-valores-referencias.md)
3. [**Hoisting (Elevación)**](/README-clase2/3-hoisting.md)
4. [**Operadores**](/README-clase2/4-operadores.md)
5. [**Execution context (Contexto de Ejecución)**](/README-clase2/5-execution-context.md)
6. [**Execution stack (Pilas de ejecución)**](/README-clase2/6-execution-stack.md)
7. [**Call-back (Devolver la llamada)**](/README-clase2/7-callback.md)
8. [**Coerción de datos**](/README-clase2/8-coercion-de-datos.md)
9. [**First class function**](/README-clase2/9-first-class-function.md)
10. [**This**](/README-clase2/10-this.md)
11. [**Ejercicios this**](/README-clase2/11-%20ejercicios-this.md)
12. [**Scope ( alcance )**](/README-clase2/12-scope.md)

**CLASE 3:** son los siguientes temas:

1. [**Closure**](/README-clase3/1-closure.md) 
2. [**Bind**](/README-clase3/2-bind.md)
3. [**Call**](/README-clase3/3-call.md)
4. [**Apply**](/README-clase3/4-apply.md)

# CLASE 4


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

**Recursion EJERCICIOS:**

~~~
let nFibonacci = num => {
  if( num === 0 ) return 0;
  if( num === 1 ) return 1;
  return nFibonacci(num - 1) + nFibonacci(num - 2);
}


let fibonacci2 = num => {
  if( num < 2 ) return num;
  return fibonacci2(num-1) + fibonacci2(num - 2);
}


let fibonacci = n => {
  return n < 2 ? n : fibonacci(n-1) + fibonacci(n - 2);
}
~~~

> Bueno para entender cuando se llama a la misma funcion es donde hace recursividad y en este la recursividad está siendo llamada 2 veces (
    fibonacci( n - 1 )  and fibonacci( n - 2))

> Es decir que en ambos se deben de hacer la pregunta según la funcion en el que estes. Si no entendiste mirar el video del enlace.

> El primero es como que si no me da ni 0 y ni 1 entonces fallaría la recursividad. Es decir es incompleto.

> El segundo con el tercero es completo lo que cambia es como estan siendo declaradas, ahorrando una linea de codigo con el tercero intentar aprender hacer con el tercero.


- Para entender esto mirar el video del enlace: https://youtu.be/k6I_TOW6O2o


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

## Estructura de datos ( solo concepto )

Cuando hablamos de estructura de datos nos referimos a como organizamos los datos cuando programamos. Básicamente, este tema trata de encontrar formas particulares de organizar datos de tal manera que puedan ser utilizados de manera eficiente.

# CLASE 5

## LISTAS ENLAZADAS

Iterar sobre la lista: recorrer la lista viendo sus elementos o hasta que encontremos el elemento deseado.

Insertar un nodo: la operación va cambiar según el lugar donde querramos insertar el nodo nuevo:

- Al principio de la lista.
- En el medio de la lista.
- Al final de la lista.

Sacar un nodo:

- Del principio de la lista.
- Del medio de la lista.

**EJEMPLOS:**

~~~
function Node(data) {
    this.data = data;
    this.next = null;
}

function List() {
    this._length = 0;
    this.head = null;
}

estas son lass funciones que vamos aprender.
~~~



~~~
function Nodo(data) {
    this.data = data;
    this.next = null;
}

let nuevoNodo = new Nodo('Valentina');

console.log(nuevoNodo);
~~~

> Esta clase es como lo que dije de una vez que termine este se pasa al sgte pero acá lo vamos haciendo de forma manual como que no es recomando nos falta una función para que sea más práctico al hacerlo.


~~~
function Node(data) {
    this.data = data;
    this.next = null;
}


function List() {
    this._length = 0;
    this.head = null;
}


List.prototype.add = function( data ) {
    var node = new Node(data);
    let current = this.head;

    if(!current) {
        this.head = node;
        this._length++
        return node;
    }

    while( current.next !== null ) {
        current = current.next
    }

    current.next = node;
    this._length++;
    return node;
}



let nuevaLista = new List();
console.log(nuevaLista);

nuevaLista.add('Valentina');

console.log(nuevaLista);

nuevaLista.add('Pablo');

console.log(nuevaLista);

nuevaLista.add('Maria');

console.log(nuevaLista);
~~~



~~~
List.prototype.getAll = function() {
    current = this.head;
    if( !current ) {
        console.log('la lista está vacía');
    }

    while(current) {
        console.log(current.data);
        current = current.next;
    }
}
~~~

**EJERCICIO COMPLEJO DE EJEMPLO:**

~~~
function LinkedList() {
    this._length = 0;
    this.head = null;
}


function Node(value) {
    this.value = value;
    this.next = null;
}


LinkedList.prototype.add = function(value) {
    let node = new Node(value);
    let current = this.head;

    if( !current ) {
        this.head = node;
        this._length++;
        return node
    }

    while( current.next !== null ) {
        current = current.next;
    }

    current.next = node;
    this._length++;
}

LinkedList.prototype.remove = function() {
    let current = this.head;

    if( this.head === null ) return null

    else if( this._length === 1 ) {
        let deleted = current.value;
        this.head = null;
        this._length --;
        return deleted;
    }

    while(current.next.next) {
        current = current.next;
    }

    let removed = current.next.value;
    current.next = null;
    this._length --;
    return removed;
}

LinkedList.prototype.search = function(param) {
    if( this.head === null ) return null

    let current = this.head;

    while(current) {

        if (current.value === param) return current.value

        else if (typeof param === 'function') {
            if( param(current.value) === true ) return current.value
        }

        current = current.next;

    }

    return null;

}

let nuevo = new LinkedList();


function cb() {
    return 'valentina';
}


nuevo.add('valentina');
nuevo.add('martin');
nuevo.remove();
nuevo.search(cb);


console.log(nuevo);
~~~

**OTRO EJERCICIO UN POCO MAS COMPLEJO QUE EL ANTERIOR:**

~~~
function HasTable() {
    this.numBuckets = 35;
    this.buckets = [];
}


HasTable.prototype.hash = function(key) {
    let suma = 0;
    for( let i = 0; i < key._length; i++ ){
        suma += key.charCodeAt(i);
    }

    return suma % this.numbuckets;
}


HasTable.prototype.set = function ( key, value ) {
    if( typeof key !== 'string' ) {
        throw TypeError('Keys must be string');
    }

    let index = this.hash(key);

    if( !this.buckets[index] ) {    // this.buckets[index] === undefined
        this.buckets[index] = {}
    }

    this.buckets[index][key] = value;

}


HasTable.prototype.get = function(key) {
    let index = this.hash(key);
    return this.buckets[index][key];
}


HasTable.prototype.hasky = function(ley) {
    let index = this.hash(key);

    return this.buckets[index].hasOwnProperty(key)

}
~~~

# CLASE 6

**IMPORTANTE: intentar colocar las imagenes QUE FALTAN o aunque sea una dirección de como verlo... aprender eso de marck down**


##  ARBOLES ( Trees )

Bueno es una estructura nueva que ha sido creado.

A los útimos nodos que no tienen ninguna conexión se le llaman nodos ( hojas ), es  decir, que son las hojas del arbol.


## ARBOLES BINARIOS 

Los arboles binarios solo pueden subdividirse en 2 máximo si se dividen en más de 2 no son binarios.

Su orden a la hora de dividirse es como sea, puede tener un menor en la izquierda o un mayor.

Otro dato es que si cada uno de los nodos tienen 2 hijos, osea se dividen en 2 cada nodo se llama que es un árbol completo.

**ARBOLES BINARIOS DE BUSQUEDA ( binary search tree )**

Es lo mismo que el otro si no que la diferencia es que tiene un orden a la hora de dividirse, n se si siempre será los menores a la izquierda y mayores a la derecha no es 100% seguro esto, pero o es eso, o tambien viceversa y ya.


## CLASE 7 

**ALGORITMOS:** Un algoritmo es un conjunto prescrito de instrucciones o reglas bien definidas.

Ordenadas y finita que permite realizar una actividad mediante pasos sucesivos, que no generen dudas a quien deba realizar dicha actividad, es decir, una serie de pasos a seguir para completar una tarea.

1. Resuelva un problema

2. Debe ser comprensible

3. Hacerlo eficientemente

**COMO MEDIMOS LA EFICIENCIA DE UN ALGORTIMO:**

- Tiempo
- Espacio
- Otros recursos:
    - Red
    - Gráficos
    - Hardware( Impresoras, Cpus, sensores, etc...)

**EJEMPLOS:**

~~~
let max = array[0];
for( var i = 0; i <= array.length; i++ ) {
    if( array[i] > max ) {
        max = array[i];
    }
}

console.log(max);
~~~






