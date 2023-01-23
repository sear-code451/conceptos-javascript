## Execution context (contexto de ejecución)

El contexto de ejecución contiene información sobre que código se está ejecutando en cada momento.
Además de mantener el código que tiene que ejecutar, también mantiene más información sobre donde se invocó ese código, en que lexical enviroment está, etc. EJEMPLO:

~~~
function person(){          //  execution context
    let first = 'Tony'; 
    let last = 'Sanchez';

function firstName(){       // execution context
        return first;
    }

    function lastName(){    // execution context
        return last;
    }

    alert( firstName() + '' + lastName() );
}
~~~

> **IMPORTANTE:** El execution context es que se ejecuta siempre y cuanndo se lo llame o invoque si no se ejecuta su mismo nombre lo dice.

> **OTRO DATO IMPORTANTE:** Lo primero que ejecuta son los objetos globales o tambien conocido contexto global.