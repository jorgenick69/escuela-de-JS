function auto(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}

var autoNuevo = new auto("honda", "x", 2020);
console.log(autoNuevo)