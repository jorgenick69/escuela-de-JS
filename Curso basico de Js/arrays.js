var frutas = ["platano", "manzana", "cereza"];
console.log(typeof(frutas));
console.log(frutas);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[0]);
frutas.push("uvas"); //agrega elemento a lo ultimo
console.log(frutas);
console.log(frutas[3]);
frutas.pop(); //eliminar el ultimo
console.log(frutas);
frutas.unshift("uvas"); //agrega al inicio
console.log(frutas);
frutas.shift(); //eliminar el primero
console.log(frutas);
var posicion = frutas.indexOf("cereza");
posicion;


console.log(frutas.length)

let primero = frutas[0];
primero;


let ultimo = frutas[frutas.length - 1]
    // Banana
ultimo;
frutas
frutas.splice(1, 1);
frutas;