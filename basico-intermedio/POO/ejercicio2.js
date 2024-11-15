class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("App iniciada")
        }
    }

    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("App cerrada")
        }
    }

    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            alert("App instalada")
        }
    }

    desinstalar() {
        if (this.instalada == true) {
            this.instalada = false;
            alert("App desinstalada correctamente")
        }
    }

    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b>
        Puntuación: <b>${this.puntuacion}</b>
        Peso: <b>${this.peso}</b>
        `
    }

}

app = new App("16.000", "5 estrellas", "900MB");
app2 = new App("17.000", "4 estrellas", "500MB");
app3 = new App("18.000", "2 estrellas", "100MB");
app4 = new App("10.000", "4 estrellas", "500MB");
app5 = new App("1.000", "2 estrellas", "900MB");
app6 = new App("4.000", "4 estrellas", "500MB");
app7 = new App("2.000", "2 estrellas", "100MB");

document.write(`
    ${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `
)


