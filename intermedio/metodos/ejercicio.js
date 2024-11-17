const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez", "Marco", "Pedro", "Hernesto", "Estefano", "Alejandro"],
        programacion: ["Rodriguez", "Marco", "Pedro", "Hernesto", "Estefano", "Julian", "Alejandro"],
        matematica: ["Hernandez", "Marco", "Pedro", "Hernesto", "Julian", "Alejandro"],
        quimica: ["Rodriguez", "Marco", "Pedro", "Hernesto", "Estefano", "Julian", "Alejandro"],
        lenguaje: ["Aguilar", "Marco", "Pedro", "Estefano", "Alejandro"],
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}


const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color: red">${profesor}</b><br>
    Los alumnos son: <b style="color: aqua">${alumnos}</b><br>   <br>
`);
    }
}

const cantidadClases = (alumno) => {
    let informacion = obtenerInformacion()
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info )
        }
    }
    return `<b style="color: aqua">${alumno}</b> está en <b>${cantidadTotal}</b> clases: 
    <b style="color: green">${clasesPresentes}</b> <br>`
}

mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("matematica")
mostrarInformacion("quimica")
mostrarInformacion("lenguaje")

document.write(cantidadClases("Hernesto"))
