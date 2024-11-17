let materias = {
    fisica: ["Perez", "Marco", "Pedro", "Hernesto", "Estefano", "Alejandro"],
    programacion: ["Rodriguez", "Marco", "Pedro", "Hernesto", "Estefano", "Julian", "Alejandro"],
    matematica: ["Hernandez", "Marco", "Pedro", "Hernesto", "Julian", "Alejandro"],
    quimica: ["Rodriguez", "Marco", "Pedro", "Hernesto", "Estefano", "Julian", "Alejandro"],
    lenguaje: ["Aguilar", "Marco", "Pedro", "Estefano", "Alejandro"],
}


const inscribir = (alumno, materia) => {
    personas = materias[materia];

    if (personas.length >= 21) {
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br>`)
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                matematica: materias["matematica"],
                quimica: materias["quimica"],
                lenguaje: materias["lenguaje"],
            }
        } else if ( materia == "programacion" ) {
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                matematica: materias["matematica"],
                quimica: materias["quimica"],
                lenguaje: materias["lenguaje"],
            }
        }else if ( materia == "matemateica" ) {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                matematica: personas,
                quimica: materias["quimica"],
                lenguaje: materias["lenguaje"],
            }
        }else if ( materia == "quimica" ) {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                matematica: materias["matematica"],
                quimica:personas,
                lenguaje: materias["lenguaje"],
            }
        }else if ( materia == "lenguaje" ) {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                matematica: materias["matematica"],
                quimica: materias["quimica"],
                lenguaje: personas,
            }
        }
        document.write(`Felicidades ${alumno} te haz inscrito a ${materia} <br> <br>`)
    }

}

document.write("Lista de alumnos: " + materias["programacion"] + "<br> <br>")

inscribir("Pedro", "quimica")
inscribir("Norma", "lenguaje")
inscribir("Raphaela", "programacion")
inscribir("Andy", "lenguaje")
inscribir("Gabriel", "programacion")
inscribir("Nestor", "lenguaje")
inscribir("Jorge", "matematica")
inscribir("Violet", "matematica")
inscribir("Lucia", "quimica")


document.write("Lista de alumnos actualizada:<br>" + materias["programacion"])