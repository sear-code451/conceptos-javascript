## EJEMPLOS MAS COMPLEJOS DE THIS:

~~~
const sasha = {
    nombre: 'Sasha',
    twitter: '@pablo',
    saludar: function (){
        function seguimeEnTwitter(){
            console.log('Seguime en Twitter: ' + this.twitter);
        }
    

        console.log('Hola, me llamo ' + this.nombre);
        seguimeEnTwitter();
    }

}

sasha.saludar();
~~~

> Este ejercicio está mal una parte debido a que no imprimirá twitter.

>Para que salga bien se verá en el siguiente ejercicio.

~~~
const sasha = {
    nombre: 'Pablo',
    twitter: '@pablo',
    saludar: function(){
        console.log('Hola, me llamo ' + this.nombre);
        this.seguimeEnTwitter();
    },

    seguimeEnTwitter: function(){
        console.log('Seguime en Twitter: ' + this.twitter);
    }

}

sasha.saludar();
~~~
