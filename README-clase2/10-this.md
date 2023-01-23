## THIS (éste, esta, esto)

Bueno this es como que valor de otro lado puede ocupar... pero el this si no tiene un método quien lo guía como (objeto.bind), entonces sin esto que los indique el this busca al mas cercano de su mismo nivel o un nivel mas arriba, si no existe ya un nivel mas entonces en el global busca.

EJEMPLO:

~~~
function quiensoy(){
    console.log('Hola, yo soy:', this);
}

quiensoy(); // undefined o te saldra global.
~~~

OTRO EJEMPLO:

~~~
const sasha = {
    nombre: 'sasha',

    saludar: function (){
        console.log('hola, me llamo ' + this.nombre );
    },

    hermano:{
        nombre: 'Eric',
        saludar: function (){
            console.log('yo el hermano, me llamo ' + this.nombre);
        }
    }
}

sasha.saludar();
sasha.hermano.saludar();
~~~
