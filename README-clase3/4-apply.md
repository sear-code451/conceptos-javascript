## APPLY ( aplicar )

Bueno es lo mismo que call este se invoca, no hay necesidad de llamarlo en otra función este mismo los invoca en ese momento.

**EJEMPLO:**

~~~
var logNombre = function(arg1, arg2) {
    console.log( arg1 + ' ' + this.nombre + ' ' + arg2 );
}

logNombre.apply(persona, ['Hola', ', como estas?']);
~~~
