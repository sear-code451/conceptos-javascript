function henryParking(arr) {
  // Tu código aquí:
    this.arreglo = arr;
}

function Queue() {
    this.array = [];
  }


henryParking.prototype.queue = function() {
    let nuevo = new Queue();

    if( this.arreglo.length === 0  ) return false;

    for( let i = 0; i < this.arreglo.length; i++ ) {
        if( this.arreglo [i] === "OUT" ) {
            nuevo.array.shift();
        } else  {
            nuevo.array.push(this.arreglo[i]);
        }
    }
    return nuevo;
}

let restantes = new henryParking([23, 43, "OUT", 65, "OUT", 32, 55, "OUT"]);

console.log(restantes.queue())