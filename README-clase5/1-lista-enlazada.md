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
