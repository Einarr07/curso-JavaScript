// Objeto que contiene las materias y sus listas de participantes
let materias = {
    fisica: ["Perez", "Marco", "Pedro", "Hernesto", "Estefano", "Alejandro"],
    programacion: ["Rodriguez", "Marco", "Pedro", "Hernesto", "Estefano", "Julian", "Alejandro"],
    matematica: ["Hernandez", "Marco", "Pedro", "Hernesto", "Julian", "Alejandro"],
    quimica: ["Rodriguez", "Marco", "Pedro", "Hernesto", "Estefano", "Julian", "Alejandro"],
    lenguaje: ["Aguilar", "Marco", "Pedro", "Estefano", "Alejandro"],
};

// Función para inscribir un alumno en una materia
const inscribir = (alumno, materia) => {
    // Obtiene la lista de personas en la materia seleccionada
    personas = materias[materia];

    // Verifica si la materia tiene el máximo permitido de estudiantes (21)
    if (personas.length >= 21) {
        // Si la clase está llena, muestra un mensaje de error
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas <br>`);
    } else {
        // Si hay cupo, agrega al alumno a la lista
        personas.push(alumno);

        // Actualiza el objeto `materias` dependiendo de la materia seleccionada
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                matematica: materias["matematica"],
                quimica: materias["quimica"],
                lenguaje: materias["lenguaje"],
            };
        } else if (materia == "programacion") {
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                matematica: materias["matematica"],
                quimica: materias["quimica"],
                lenguaje: materias["lenguaje"],
            };
        } else if (materia == "matemateica") {
            // Nota: Hay un error tipográfico en "matemateica", debe ser "matematica"
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                matematica: personas,
                quimica: materias["quimica"],
                lenguaje: materias["lenguaje"],
            };
        } else if (materia == "quimica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                matematica: materias["matematica"],
                quimica: personas,
                lenguaje: materias["lenguaje"],
            };
        } else if (materia == "lenguaje") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                matematica: materias["matematica"],
                quimica: materias["quimica"],
                lenguaje: personas,
            };
        }
        // Muestra un mensaje de confirmación de inscripción
        document.write(`Felicidades ${alumno}, te has inscrito a ${materia} <br><br>`);
    }
};

// Muestra la lista inicial de alumnos en la materia de programación
document.write("Lista de alumnos: " + materias["programacion"] + "<br><br>");

// Realiza inscripciones en diferentes materias
inscribir("Pedro", "quimica");
inscribir("Norma", "lenguaje");
inscribir("Raphaela", "programacion");
inscribir("Andy", "lenguaje");
inscribir("Gabriel", "programacion");
inscribir("Nestor", "lenguaje");
inscribir("Jorge", "matematica");
inscribir("Violet", "matematica");
inscribir("Lucia", "quimica");

// Muestra la lista actualizada de alumnos en la materia de programación
document.write("Lista de alumnos actualizada:<br>" + materias["programacion"]);
