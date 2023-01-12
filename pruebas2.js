

// function Node(data) {
//     this.data = data;
//     this.next = null;
// }

// function List() {
//     this._length = 0;
//     this.head = null;
// }

// List.prototype.add = function(data) {
//     var node = new Node(data);
//     console.log(node);
//     let current = this.head;
//     console.log(current);

//     if(!current) {  // si es falso entra acá; si no es falso no entra
//         this.head = node;
//         console.log(this.head);
//         this._length++;
//         return node;
//     }

//     while(current.next !== null) {  // mientras se cumpla la condición entra
//         current = current.next;
//     }

//     current.next = node;
//     console.log(current.next)
//     this._length++;
//     return node;
// }

// let nuevaLista = new List();
// console.log(nuevaLista);

// nuevaLista.add('Valentina');

// console.log(nuevaLista);

// nuevaLista.add('Pablo');

// console.log(nuevaLista)

// nuevaLista.add('juan');

// console.log(nuevaLista)


function Node(value) {
    this.value = value;
    this.next = null;
}

function List() { 
    this._length = 0;
    this.head = null;
}

List.prototype.add = function (data) {
    let node = new Node(data);
    current = this.head;

    if( !current ) {
        this.head = node;
        this._length ++;
        return node
    }


    while (current.next !== null) return current = current.next;

    current.next = node;
    this._length ++ ;
    return node
}

List.prototype.remove = function() {
    current = this.head;

    if(this.head === null) return null

    if( this._length === 1 ) {
        let deleted = current.value;
        this.head = null
        this._length --;
        return
    }

    while( current.next.next ) return current = current.next

    let removed = current.next.value;
    current.next = null;
    this._length --;
    return

}


let nuevo = new List();

nuevo.add('Pablo');
console.log(nuevo)
nuevo.add('Martin');
nuevo.remove();


console.log(nuevo);




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