/*
todo: SCOPE es el alcance que tienen las variables

*/
var nombre = "jorge";


/*
!nombre es una variable global se tiene acceso en cualquier parte del codigo
*/

function nombreCompleto() {
    var apellido = "perez";

    /*
    ?apellido es una variable local se tiene acceso solo en la funcion
    */

    return `${nombre} ${apellido}`;

}
var salida = nombreCompleto();
salida;
apellido;