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
