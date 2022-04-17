var estudiantes = [];
estudiantes.push("maria", "sergio", "rosa", "daniel");
estudiantes;
var cantidad = estudiantes.length;
cantidad;

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}
for (const estudiante of estudiantes) {
    // saludarEstudiantes(estudiante);
}
for (let index = 0; index < estudiantes.length; index++) {
    const estudiante = estudiantes[index];
    console.log(index)
        //saludarEstudiantes(estudiante);
    saludarEstudiantes(estudiantes[index]);
}