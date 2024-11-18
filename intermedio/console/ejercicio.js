// Objeto que contiene las materias con sus datos:
// [porcentaje de asistencias, promedio de notas, cantidad de trabajos prácticos realizados, nombre de la materia]
const materias = {
    fisica: [90, 6, 3, "fisica"],
    matematica: [84, 8, 2, "matematica"],
    logica: [92, 8, 4, "logica"],
    quimica: [96, 8, 4, "quimica"],
    calculo: [91, 6, 3, "calculo"],
    protramacion: [79, 7, 4, "protramacion"],
    biologia: [75, 9, 2, "biologia"],
    bbdd: [98, 9, 1, "bbdd"],
    algebra: [100, 10, 4, "algebra"],
};

// Función que evalúa si el estudiante aprobó las materias
const aprobo = () => {
    // Recorremos cada materia dentro del objeto 'materias'
    for (materia in materias) {
        // Extraemos los datos de la materia: asistencias, promedio y trabajos prácticos
        let asistencias = materias[materia][0]; // Primer valor: porcentaje de asistencias
        let promedio = materias[materia][1]; // Segundo valor: promedio de notas
        let trabajos = materias[materia][2]; // Tercer valor: cantidad de trabajos prácticos realizados

        // Mostramos el nombre de la materia
        console.log("Materia: " + materias[materia][3]);

        // Evaluamos las asistencias
        if (asistencias >= 90) {
            console.log("%c Aprobado en orden", "color: green"); // Mensaje en verde si cumple el requisito
        } else {
            console.log(materias[materia][3]);
            console.log("%c Falta de asistencias", "color: red"); // Mensaje en rojo si no cumple
        }

        // Evaluamos el promedio de notas
        if (promedio >= 7) {
            console.log("%c Promedio en orden", "color: green"); // Mensaje en verde si cumple el requisito
        } else {
            console.log("%c promedio desaprobado", "color: red"); // Mensaje en rojo si no cumple
        }

        // Evaluamos la cantidad de trabajos prácticos realizados
        if (trabajos >= 3) {
            console.log("%c Trabajos practicos en orden", "color: green"); // Mensaje en verde si cumple el requisito
        } else {
            console.log("%c Falta de trabajos practicos", "color: red"); // Mensaje en rojo si no cumple
        }

        // Espacio en blanco para separar las evaluaciones de cada materia en la consola
        console.log("\n");
    }
};

// Llamamos a la función para evaluar si el estudiante aprobó las materias
aprobo();
