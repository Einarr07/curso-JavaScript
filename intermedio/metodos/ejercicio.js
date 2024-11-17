// Función que obtiene información de una materia específica o de todas las materias
const obtenerInformacion = (materia) => {
    // Objeto que contiene las materias, el profesor y los alumnos inscritos
    materias = {
        fisica: ["Perez", "Marco", "Pedro", "Hernesto", "Estefano", "Alejandro"],
        programacion: ["Rodriguez", "Marco", "Pedro", "Hernesto", "Estefano", "Julian", "Alejandro"],
        matematica: ["Hernandez", "Marco", "Pedro", "Hernesto", "Julian", "Alejandro"],
        quimica: ["Rodriguez", "Marco", "Pedro", "Hernesto", "Estefano", "Julian", "Alejandro"],
        lenguaje: ["Aguilar", "Marco", "Pedro", "Estefano", "Alejandro"],
    };

    // Si la materia solicitada existe en el objeto, retorna un array con la información
    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        // Si no se encuentra la materia, retorna todo el objeto `materias`
        return materias;
    }
};

// Función que muestra información de una materia específica
const mostrarInformacion = (materia) => {
    // Obtiene la información de la materia usando la función `obtenerInformacion`
    let informacion = obtenerInformacion(materia);

    // Si se obtuvo información válida
    if (informacion !== false) {
        let profesor = informacion[0][0]; // El primer elemento del array es el nombre del profesor
        let alumnos = informacion[0]; // Resto del array contiene a los alumnos
        alumnos.shift(); // Elimina al profesor del array para quedarnos solo con los alumnos

        // Muestra la información en el documento
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color: red">${profesor}</b><br>
        Los alumnos son: <b style="color: aqua">${alumnos}</b><br>   <br>
        `);
    }
};

// Función que cuenta cuántas clases tiene un alumno y cuáles son
const cantidadClases = (alumno) => {
    // Obtiene toda la información de las materias
    let informacion = obtenerInformacion();
    let clasesPresentes = []; // Array para almacenar las clases en las que está el alumno
    let cantidadTotal = 0; // Contador de clases en las que está el alumno

    // Itera sobre cada materia en el objeto `informacion`
    for (info in informacion) {
        // Si el alumno se encuentra en la lista de alumnos de esa materia
        if (informacion[info].includes(alumno)) {
            cantidadTotal++; // Incrementa el contador
            clasesPresentes.push(" " + info); // Agrega el nombre de la materia al array
        }
    }

    // Retorna un mensaje con la cantidad de clases y la lista de clases en las que está el alumno
    return `<b style="color: aqua">${alumno}</b> está en <b>${cantidadTotal}</b> clases: 
    <b style="color: green">${clasesPresentes}</b> <br>`;
};

// Muestra información de cada materia específica
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("matematica");
mostrarInformacion("quimica");
mostrarInformacion("lenguaje");

// Muestra la cantidad de clases en las que está inscrito un alumno específico
document.write(cantidadClases("Hernesto"));
