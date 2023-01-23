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