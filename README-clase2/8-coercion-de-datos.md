## Coerción de datos

Bueno es como que el valor se le puede dar según el dato que querrás convertirlo. Ejemplo:

~~~
number('3');  // esto se lo va poder convertir a 3 obviamente.

number(false);  // esto lo va va convertir a 0.

number(true);   // esto lo va convertir a 1.

number(undefined);  // esto lo va convertir a Nan (not a number).

number(null);   // esto lo convierte a un 0 el porque bueno así lo definió Javascript.
~~~

EJEMPLO EN EJERCICIO:

~~~
3 + '3' = 33    // lo está concatenando. lo convierte como que a string el numero.

3 - '3' = 0     // simmplemente resta lo convierte a numero el string.

3 - true = 2    // como dijimos si queremos convertirlo a numero el true entonces (true vale 1) mirar arriba para entenderlo mejor.

3 - false = 3   // como dijimos (false vale 0) asi que es como decir (3 - 0).

true + true = 2 // porque true son 1 en valor numerico asi que los convierte a numerico porque de forma booleana no tiene sentido.
~~~
