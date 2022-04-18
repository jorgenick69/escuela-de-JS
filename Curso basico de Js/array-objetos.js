var articulos = [{
    nombre: "bici",
    costo: 3000
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
}]

/*
! .filter : nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un nuevo array.
? .map : crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

*/
var articulosFiltrados = articulos.filter(function(articulo) {

    return articulo.costo <= 500;
})
console.log(articulosFiltrados);
var articulosFiltrados = articulos.filter(function(articulo) {

    return articulo.costo >= 5500;
})
console.log(articulosFiltrados);
/*********************************************************************************/
var nombreArticulo = articulos.map(function(articulo) {
    return articulo.nombre;
});
console.log(nombreArticulo);