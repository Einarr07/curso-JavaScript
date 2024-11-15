class Celular {
    constructor(color, peso, tamaño, resolucionCamara, ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram;
        this.encendido = false;
    }

    presionarBotonEncendido(){

        if (this.encendido == false) {
            alert("Celular prendido")
            this.encendido = true;
        }else {
            alert("Celular apagado")
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("Reiniciando el celular")
        }else {
            alert("El celular está apagado")
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolución de: ${this.resolucionCamara}`)
    }

    grabarVideo(){
        alert(`Grabando en una resolución de: ${this.resolucionCamara}`)
    }

    celularInfo(){
        return `
        Color: <b> ${this.color}</b> </br>
        Peso: <b> ${this.peso}</b> </br> 
        Tamaño: <b> ${this.tamaño}</b> </br>
        Resolución Video: <b> ${this.resolucionCamara}</b> </br>
        Memoria RAM: <b> ${this.ram}</b> </br>`
    }
}

class CelularAltaGama extends Celular{

    constructor(color, peso, tamaño, resolucionCamara, ram, resolucionCamaraTrasera) {
        super(color, peso, resolucionCamara, ram);
        this.resolucionCamaraTrasera = resolucionCamaraTrasera
    }

    grabarVideoLento() {
        alert("Camara lenta activada")
    }

    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial")
    }

    infoAltaGama(){
        return this.celularInfo() + `Resolución Camara Trasera: ${this.resolucionCamaraTrasera}`
    }
}

celular1 = new Celular("rojo", 150, 5,"full hd", "2GB");

//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();

celular2 = new Celular("verde", 175, 7, "hd", "5GB");

celular3 = new Celular("morado", 115, 10, "Estandar", "4GB");

document.write(`
${celular1.celularInfo()} <br>
${celular2.celularInfo()} <br>
${celular3.celularInfo()} <br>
`)

Iphone = new CelularAltaGama("rosado", 130,5.2, "4k", "3GB", "Full HD")
Iphone2 = new CelularAltaGama("naranja", 140,7, "4k", "5GB", "Full HD")

document.write("-------------------Información celular alta gama-------------------- <br>");

document.write(`
${Iphone.celularInfo()} <br>
${Iphone2.celularInfo()} <br>
`)