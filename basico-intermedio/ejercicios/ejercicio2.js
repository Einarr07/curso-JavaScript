// Solicita la cantidad de alumnos y almacena los datos en el arreglo `alumnosTotales`
let cantidad = parseInt(prompt("¿Cuántos alumnos son?"));
let alumnosTotales = [];

// Llenado inicial de la lista de alumnos, donde cada alumno es un arreglo con nombre y número de asistencias
for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Nombre del alumno " + (i + 1));
    alumnosTotales[i] = [nombre, 0];  // Inicializa con el nombre y asistencia en 0
}

// Función para tomar lista, verificando si el alumno está presente
const tomarLista = (nombre, indice) => {
    // Solicita al usuario que ingrese "p" o "P" para indicar que el alumno está presente
    let presencia = prompt(`¿${nombre} está presente? (Responde con "p" para presente)`);
    if (presencia === "p" || presencia === "P") {
        alumnosTotales[indice][1]++;  // Incrementa la asistencia del alumno
    }
}

// Ciclo para tomar la lista durante 30 días
for (let i = 0; i < 30; i++) {
    for (let alumno in alumnosTotales) {
        tomarLista(alumnosTotales[alumno][0], alumno);  // Llama a tomarLista con cada alumno
    }
}

// Ciclo para mostrar los resultados finales de cada alumno
for (let alumno in alumnosTotales) {
    let nombre = alumnosTotales[alumno][0];
    let asistencias = alumnosTotales[alumno][1];
    let ausencias = 30 - asistencias;

    // Genera el mensaje de resultado para el alumno
    let resultado = `${nombre}: <br>
    ______________Presentes: <b>${asistencias}</b><br>
    ______________Ausencias: <b>${ausencias}</b><br>`;

    // Verifica si el alumno reprobó por inasistencias (más de 18 ausencias)
    if (ausencias > 18) {
        resultado += "<b style='color: red'>Reprobado por inasistencias</b><br>";
    } else {
        resultado += "<br>";
    }

    // Muestra el resultado en el documento
    document.write(resultado);
}
