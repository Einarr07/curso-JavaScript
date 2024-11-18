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
}

const aprobo  = () => {
    for (materia in materias) {

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log("Materia: " + materias[materia][3])

        if (asistencias >= 90) {
            console.log("%c Aprobado en orden", "color: green");
        }else{
            console.log(materias[materia][3])
            console.log("%c Falta de asistencias", "color: red");
        }

        if (promedio >= 7 ){
            console.log("%c Promedio en orden", "color: green");
        }else {
            console.log("%c promedio desaprobado", "color: red");
        }

        if (trabajos >= 3 ){
            console.log("%c Trabajos practicos en orden", "color: green");
        }else{
            console.log("%c Falta de trabajos practicos", "color: red");
        }

    }
}

aprobo()