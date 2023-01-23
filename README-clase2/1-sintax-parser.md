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