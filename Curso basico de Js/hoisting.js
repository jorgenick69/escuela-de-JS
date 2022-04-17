/*
todo Hoisting
? es que  cuando las variables y las funciones se declaren antes de que se procese cualquier tipo de codigo
!el hoisting pasa solo pasa con versiones pasadas de Js de EM5 hacia atras

*/
console.log(miNombre);
var miNombre;
miNombre = "jorge";

miNombre;
console.log(hey());

function hey() {
    return "hola " + miNombre;
}