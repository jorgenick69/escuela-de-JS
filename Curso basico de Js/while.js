var estudiantes = [];
estudiantes.push("maria", "sergio", "rosa", "daniel");
estudiantes;

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}
while (estudiantes.length > 0) {
    console.log(estudiantes.length)
    estudiantes;
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}