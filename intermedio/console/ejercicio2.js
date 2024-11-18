// Definimos las diferentes actividades con su duración en minutos
let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de trabajos prácticos";
let homework = "30 minutos cosas de la casa";
let descanso = "10 minutos de descanso";

// Mostramos el encabezado en la consola
console.log("TAREAS");

// Bucle para simular 14 días de tareas (dos semanas)
for (let i = 0; i < 14; i++) {
    // Si es el primer día, iniciamos el grupo para la "Semana 1"
    if (i == 0) {
        console.group("Semana 1");
    }

    // Creamos un grupo colapsado para cada día
    console.groupCollapsed("Día " + (i + 1)); // Mostramos el día actual (i+1 porque los días empiezan en 1)
    console.log(trabajo); // Mostramos las actividades de ese día
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd(); // Cerramos el grupo del día

    // Si es el octavo día, cerramos el grupo de la "Semana 1" e iniciamos el de la "Semana 2"
    if (i == 7) {
        console.groupEnd(); // Cerramos el grupo de la "Semana 1"
        console.groupCollapsed("Semana 2"); // Iniciamos el grupo para la "Semana 2"
    }
}

// Cerramos los grupos abiertos para evitar inconsistencias
console.groupEnd(); // Cerramos el grupo de la "Semana 2"
console.groupEnd(); // Cerramos el grupo principal de la consola
