# TUTORIAL SOBRE Javascript

## CLASES M1

**CLASE-2:** Entrará la siguiente lista de conocimientos:

1. **Syntax Parser**
2. **lexical environment (Entorno léxico)**
2. **Valores y referencias**
3. **Hoisting (Elevación)**
4. **Operadores**
5. **Execution context (Contexto de Ejecución)**
6. **Execution stack (Pilas de ejecución)**
7. **Call-back (Devolver la llamada)**
8. **Coerción de datos**
9. **First class function**
10. **This**
11. **Ejercicios this**
12. **Scope ( alcance )**

## Syntax Parser:
  Es un tipo de interprete automático en javascript ejemplo:

~~~
    function hola() {
        let como = 'comida';
    }
~~~

Acá el código esta todo bien escrito. Un ejemplo de sintax-parser sería lo sgte:

~~~
    functionz hola(){ <!-- Sintax Error (aca está mal escrito ) -->
        lets como = 'comida'; <!--Sintax Error (esta mal escrito) --> 
    }
~~~

Lo que hace es el que traduce de forma automática nuestro código al lenguaje de máquina, cosa que la máquina aca nos dice de forma automática donde esta nuestro error o en que estamos fallando.

## Lexical Enviroment (En torno Léxico):
  Hace como un tipo de listado de todo lo que nosotros declaremos ejemplo:

~~~
function hola(){
    var foo = 'hello!';
}

var sec = 'como estás?';
~~~

Lo que hace lexical es que tenga una lista de todo lo que hemos declarado ejemplo:

~~~
    Listado lexical-enviroment:

    var foo;
    var sec;
    hola();
~~~

(Tenemos declarado 2 variables foo, sec, también una function declarado como " hola "), es una lista de orden de ejecución.


