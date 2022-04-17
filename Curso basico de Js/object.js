var persona = {
    nombre: "jorge",
    apellido: "dominguez",
    edad: 28,
    casado: false,

    descripcion: function() {

        return `nombre completo: ${this.nombre}  ${this.apellido} edad: ${this.edad} ¿esta casado? ${this.casado}`
    }

}
console.log(persona)
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.casado)
console.log(persona.descripcion())