/**
* !    find() : Devuelve el primer elemento del array que cumpla con la condición dada
* ?    foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
*todo: some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
//     filter() : Devuelve todos los elementos del array que cumplan con la condición dada
 */
var articulos = [{
    nombre: "bici",
    costo: 3000
}, {
    nombre: "bici",
    costo: 5000
}, {
    nombre: "tele",
    costo: 2500
}, {
    nombre: "libro",
    costo: 320
}, {
    nombre: "celular",
    costo: 20000
}, {
    nombre: "laptop",
    costo: 25000
}, {
    nombre: "heladera",
    costo: 50000
}, {
    nombre: "teclado",
    costo: 1500
}, {
    nombre: "mouse",
    costo: 300
}, {
    nombre: "audifono",
    costo: 1300
}];
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre == "bici";
});
encuentraArticulo;
articulos.forEach(
    function(articulo) {
        console.log(articulo.nombre)
    }
);
var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo == 5000;
});
articulosBaratos;