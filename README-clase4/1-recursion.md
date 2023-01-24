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
