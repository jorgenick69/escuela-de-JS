/*
!     Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
todo: Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
?     Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
*/
console.log(4 + "7");
console.log(4 * "7");
console.log(4 * 7);
var a = 20;
var b = "7";
var c = a * b;
c;
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
var d = Number(b);
console.log(typeof(d))
console.log(d)
var e = String(a);
console.log(typeof(d))
console.log(d)