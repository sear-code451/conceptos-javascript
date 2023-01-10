
//     function square(n){
//         return n * n;
//       }

// function cachefunction( cb ) {
//     cache = {};
//     return function (arg) {
//         if(cache.hasOwnProperty(arg)) {
//             console.log(cache);
//             return cache[arg];
//         }  else {
//             cache[arg] = cb(arg);
//             console.log(cache)
//             return cache[arg];
//         }
//     };
// }

// const squareCache = cachefunction(square);
// console.log(squareCache(5));
// console.log(squareCache(5));
// console.log(squareCache(10));


// let numerador = {
//     nombre: 'pablo'
// }

// numerador['apellido'] = 'rueda';

// numerador

// factorial
/* 
    4! = 1 x 2 x 3 x 4
*/
// SET

// function nFactorial(n) {
//     if( n <= 1 ) return 1
//     return n * nFactorial( n - 1 );
// }

// console.log(nFactorial(5));
// // 4! = 1 x 2 x 3 x 4 = 24

// function factorial(n) {
//     result = 1;
//     for(let i = 1; i <= n; i++) {
//         result = i * result;
//     }
//     return result;
// }

// function nFibonacci(n) {
//     if ( n === 0) return 0
//     if (n === 1 ) return 1

//     return nFibonacci( n - 1 ) + nFibonacci( n - 2 );
// }

// console.log(nFibonacci(8));

// 7 = 0 1 1 2 3 5 8 13
//     0 1 2 3 4 5 6 7

/* 
    7

    fibo(6) + fibo(5)
    fibo(4) + fibo(3)
    fibo(2) + fibo(1)
    1
    0
*/

// function Stack() {
//     this.arr = []
// }

// Stack.prototype.add = function(element) {
//     this.arr.push(element);
// }

// Stack.prototype.remove = function() {
//     this.arr.pop();
// }


// let nuevoStack = new Stack();

// nuevoStack.add('first');
// nuevoStack.add('second');

// console.log(nuevoStack.arr)






// function Queue() {
//     this.fifo = [];
//     this.longitud = 0;
// }

// Queue.prototype.enqueue = function (element) {
//     this.fifo.push(element);
//     this.longitud ++
// }

// Queue.prototype.dequeue = function (element) {
//     if( this.longitud === 0) {
//         return this.fifo = undefined;
//     } else {
//         this.longitud --;
//         return this.fifo.shift();
//     }
// }

// Queue.prototype.size = function() {
//     return this.fifo.longitud;
// }

// let nuevo = new Queue();

// nuevo.enqueue('hola');

// console.log(nuevo);

// nuevo.enqueue('hola soy pablo');

// console.log(nuevo.longitud);

// console.log(nuevo.size);

// console.log(nuevo.fifo[1]);

// nuevo.dequeue();
// nuevo.dequeue();
// nuevo.dequeue();
// nuevo.enqueue('hello');

// console.log(nuevo);

// let objt2 = {nombre: 'Rueda'};

// let objt1 = {nombre: 'Pablo', obj: objt2};


// console.log(objt1);


/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
}



BinarySearchTree.prototype.size = function() {

    if( !this.rigth && !this.left ) return 1;
    
    if( !this.rigth && this.left ) return 1 + this.left.size()
    
    if( !this.left && this.rigth ) return 1 + this.rigth.size();

    if(this.left && this.rigth ) return 1 + this.left.size() + this.rigth.size();

}

BinarySearchTree.prototype.insert = function(value) {

    if( value > this.value ) {
        if( this.rigth ) {
            this.rigth.insert(value);
        } else {
            this.rigth = new BinarySearchTree(value);
        }
    }

    if( value < this.value ) {
        if( this.left ) {
            this.left.insert(value);
        } else {
            this.left = new BinarySearchTree(value);
        }
    }

}

BinarySearchTree.prototype.contains =  function(value) {

    if( this.value === value ) return true;

    if(value < this.value) {
        if(!this.left) return false
        else return this.left.contains(value);
    }


    if(value > this.value) {
        if(!this.rigth) return false
        else return this.rigth.contains(value);
    }

    return 'No existe';

}


BinarySearchTree.prototype.depthFirstForEach = function( cb, order ) {

    // root - izq - der
    if( order === "pre-order" ) {
        cb(this.value);
        if(this.left) this.left.depthFirstForEach(cb, order);
        if(this.rigth) this.rigth.depthFirstForEach(cb, order);
    }

    // izq - der - root
    else if( order === "post-order" ) {
        if(this.left) this.left.depthFirstForEach(cb, order);
        if(this.rigth) this.rigth.depthFirstForEach(cb, order);
        cb(this.value);
    }

    // izq - root - der
    else {
        if(this.left) this.left.depthFirstForEach(cb, order);
        cb(this.value);
        if(this.rigth) this.rigth.depthFirstForEach(cb, order);
    }
    
//           papa                                 papa
//          /    \                              /      \
//       piña    kiwi                         piña     kiwi
//                                                \
//                                               banana

// pre-order --> root - izq - der
// [papa, piña, kiwi], [papa,piña,banana,kiwi]

// post-order --> izq -der - root
// [piña, kiwi, papa], [banana, piña, kiwi, papa]

// in-order --> izq - root - der
// [piña, papa, kiwi], [piña, banana, papa, kiwi]
    
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb,array=[]){
    if(this.left) {
        array.push(this.left)
    }

    if(this.rigth) {
        array.push(this.rigth)
    }

    cb(this.value);

    if(array.length > 0) {
        array.shift().breadthFirstForEach(cb, array);
    }
}

let nuevo = new BinarySearchTree(6);
console.log(nuevo);

nuevo.insert(2);
nuevo.insert(3);
nuevo.insert(1);
nuevo.insert(4);
nuevo.insert(5);


console.log(nuevo);

console.log(nuevo.size());

console.log(nuevo.contains(3));



