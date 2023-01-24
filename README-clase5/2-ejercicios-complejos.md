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
