## BIND (enlazar)

Bind lo que hace es que nos ayuda a donde debemos de apuntar el this en que función o donde queremos que se vea para usarlo, y también para dar valor a los parámetros; bueno mirar el los ejemplos para entender mejor.

> Bind acepta más parámetro, el primero siempre es el ( this ), los sgtes sirven para bindear parámetros de una función.

> DATO IMPORTANTE: bind para invocarlo necesitan llamarlo primero. EJEMPLO:

~~~
var persona = {
    nombre: 'Pedro',
    apellido: 'Perez'
}

var logNombre = function() {
    console.log(this.nombre);
}

var logNombrePersona = logNombre.bind(persona);

logNombrePersona(); 	// imprime this.nombre de persona osea: 'Pedro'
~~~

~~~
function multiplica (a,b) {
    return a * b;
}

var multiplicaPorDos = multiplica.bind(this, 2);

 multiplicaPorDos() // coerción de datos tenemos 2 * b ya que b aún no se le ha pasado un valor asi que nos va dar Nan
~~~

~~~
 function saludar(saludo, nombre) {
    console.log(saludo + ' ' + nombre );
 }

 saludar('hola', 'Pablo'); // hola Pablo

 var saludarEnChino = saludar.bind(this, 'nihao');

 saludarEnChino('Emanuel'); // nihao Emanuel

 var saludarEnAleman = saludar.bind(this, 'guten tag', 'Luisa');

 saludarEnAleman(); // guten tag Luisa
~~~

~~~
 var gentecito = { nombre: 'Pablo' };

 function saludar2(saludo) {
    console.log(saludo + ' ' + this.nombre );
 }

 var saludarPabloEnItaliano = saludar2(gentecito, 'Buongiorno');

 saludarPabloEnItaliano();  // Buongiorno Pablo

 // el porque de  que salga eso fácil apunta el this en gentecito, y el Buongiorno es el argumento del parámetro de la función.
~~~

