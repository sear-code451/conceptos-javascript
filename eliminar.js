var instructor = {
    nombre: "Franco",
    edad: 25,
  };
  
  var alumno = {
    nombre: "Juan",
    curso: "FullStack",
  };
  
  function getNombre() {
    return this.nombre;
  }

  let nombreDelInstructor =  getNombre.bind( instructor) ;
  let nombreDelAlumno = getNombre.bind( alumno);

  console.log(nombreDelInstructor());
  console.log(nombreDelAlumno());
  
/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/



// fun fact (dato curioso):

const arr = [1,2,3,4];

arr.length = 0;

console.log(arr.length)

console.log( arr );
/* esto va imprimir []...porque el array.length dice que no tiene ningún elemento.
    Pssdta: si ya te olvidaste de esto probarle men... siempre es bueno practicar.
*/





