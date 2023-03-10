var instructor = {
    nombre: "Franco",
    edad: 25,
  };
  
  var alumno = {
    nombre: "Juan",
    curso: "FullStack",
  };
  
  function getNombre() {
    return this.nombre;
  }

  let nombreDelInstructor =  getNombre.bind( instructor) ;
  let nombreDelAlumno = getNombre.bind( alumno);

  console.log(nombreDelInstructor());
  console.log(nombreDelAlumno());
  
/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/



// fun fact (dato curioso):

const arr = [1,2,3,4];

arr.length = 0;

console.log(arr.length)

console.log( arr );
/* esto va imprimir []...porque el array.length dice que no tiene ningún elemento.
    Pssdta: si ya te olvidaste de esto probarle men... siempre es bueno practicar.
*/




/*
  Ejercicio 4
  
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

let crearCadena = ( delimitadorIzquierda, delimitadorDerecha, cadena ) => delimitadorIzquierda + cadena + delimitadorDerecha;

let asteriscos = "*";
let guion = "-";
let guionBajo = "_";


let textoAsteriscos =  crearCadena.bind( this, asteriscos, asteriscos, 'hola soy pablo' );
let textoGuiones = crearCadena.bind( this, guion, guion, 'hola soy pablo' );
let textoUnderscore = crearCadena.bind( this, guionBajo,guionBajo, 'hola soy pablo' );

console.log( textoAsteriscos() ) ;
console.log( textoGuiones() ) ;
console.log( textoUnderscore() ) ;



let nFactorial = (num) => {
  if( num <= 1 ) return 1;
    return num * nFactorial( num - 1 );
}


console.log(nFactorial(5));

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

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
/* 
if()
  fibonacci(6) + fibonacci(5);
if()
  fibonacci(4) + fibonacci(3)
if()
  fibonacci(2) + fibonacci(1)
if()
if() return 1

if() return 0



*/
console.log(fibonacci2(9))
console.log(fibonacci(9))
console.log( nFibonacci(7) );





/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/


const Stack = function() {
  this.array = [];
}

Stack.prototype.enqueue = function(element) { return this.array.push(element)};
Stack.prototype.dequeue = function() { return this.array.pop() };
Stack.prototype.size = function() { return this.array.length };


let nuevoValor = new Stack();
nuevoValor.enqueue('hola soy pablo');
console.log(nuevoValor.dequeue());
nuevoValor.enqueue('hola soy pedro');
console.log( nuevoValor )
console.log( nuevoValor.size() );








function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function(el){
  this.array.push(el);
}

Queue.prototype.dequeue = function(el){
  return this.array.shift();
}

Queue.prototype.size = function(el){
  return this.array.length;
}

let nuevoQueue = new Queue();

console.log(nuevoQueue)
nuevoQueue.enqueue('hola');
console.log(nuevoQueue);





let arreglo3 = [1,2,3,4,5,4,2,3,5,6,7,7,8,9,8,8];

let nuevoArray = new Set(arreglo3);

console.log(nuevoArray);




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







/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function Nodos(value) {
  this.value = value;
  this.next = null
}


function LinkedList() {
  this._length = 0;
  this.head = null;
}

function cb(valor1) {
  if( valor1 > 0 && (valor1 % 2) === 0 ) return true;
}

console.log(cb(2));

LinkedList.prototype.add = function (data) {
  let node = new Nodos(data);
  let current = this.head;

  if( !current ) {
    this._length++;
    this.head = node;
    return node;
  }

  while( current.next !== null ) current = current.next;

  this._length++;
  current.next = node;
  return node;
}

LinkedList.prototype.remove = function() {
  let current = this.head;

  if( !current ) throw TypeError( 'le faltan nodos men prende el foco' );
  if( this._length === 1 ) {
    let deleted = this.head;
    this.head = null
    this._length--;
    return deleted
  }

  while( current.next.next ) current = current.next;

  let removed = current.next;
  current.next = null;
  this._length--;
  return removed;
}

LinkedList.prototype.search = function(param) {
  if( this.head === null ) return null

  let current = this.head;

  while(current) {

      if (current.value === param) return current.value

      if( typeof param === 'function' ) return true;

      current = current.next;

  }

  return null;

}

let nuevo = new LinkedList();

let nuevaLista2 = new LinkedList();

console.log(nuevaLista2.add('Pablo'));
nuevaLista2;
console.log(nuevaLista2.add('rueda'));
nuevaLista2;
console.log( nuevaLista2.remove() );
nuevaLista2
console.log(nuevaLista2.search('Pablo'));
console.log( nuevaLista2.search( cb ) )
nuevaLista2






/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HasTable() {
  this.numBuckets = 35;
  this.buckets = [];
}


HasTable.prototype.hash = function(key) {
  let suma = 0;
  for( let i = 0; i < key.length; i++ ){
    console.log( key.charCodeAt(i) )
      suma += key.charCodeAt(i);
  }

  console.log(suma )
  return suma % this.numBuckets;
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

let nuevoHasTable = new HasTable();



console.log( nuevoHasTable.hash( 'pablo' ) ); 
console.log( nuevoHasTable);




