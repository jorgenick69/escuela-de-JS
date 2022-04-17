/**
 * !conjunto de sentencias que no sotros podemos utilizar con los valores guardados en las variable
 * ?son conjuntos de sentencias para hacer pasos
 */
/*
todo: hay dos tipos de funciones 
? declarativas y
! expresion
*/
/*
!DECLARATIVA
 */
function miFuncion() {
    return 3;
}
var funcion = miFuncion();
funcion;


/*
todo EXPRESION o ANONIMAS
*/

var miFuncion = function(a, b) {

    return a + b;
}

funcion = miFuncion(1, 2);
funcion;

/* ejemplo de funcion declarativa */
function saludar(estudiantes) {
    console.log(`hola ${estudiantes}`)
}
saludar("diego");