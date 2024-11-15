// Definimos la clase 'Vehiculo' que sirve como clase base para otros tipos de vehículos.
// Representa una abstracción de un vehículo con atributos generales como color, kilometraje, tipo y año.
class Vehiculo {

    /* Aplicación de abstracción:
     * En esta clase, definimos únicamente las características esenciales de un vehículo, omitiendo detalles
     * innecesarios como el tipo de ventanas, espejos, puertas, etc., para enfocarnos en una representación simplificada.
     */
    constructor(color, kilometraje, tipo, anio) {
        // Inicializamos las propiedades del vehículo con los valores recibidos como parámetros.
        this.color = color; // Color del vehículo.
        this.kilometraje = kilometraje; // Kilometraje recorrido.
        this.tipo = tipo; // Tipo de vehículo (ej. "moto", "carro").
        this.anio = anio; // Año de fabricación.

        // Propiedad 'info' que almacena una descripción detallada del vehículo.
        this.info = `Soy un vehículo de tipo: ${this.tipo}, con un color: ${this.color}, mi kilometraje es: 
        ${this.kilometraje} y soy del año ${this.anio}`;
    }

    // Método para mostrar la información del vehículo en la página.
    verInfo() {
        document.write(this.info + "<br>");
    }
}

// Herencia: creamos una clase 'Carro' que extiende la clase base 'Vehiculo'.
// Esto significa que 'Carro' hereda todas las propiedades y métodos de 'Vehiculo'.
class Carro extends Vehiculo {
    constructor(color, kilometraje, tipo, anio, modelo) {
        // Usamos 'super' para llamar al constructor de la clase base y pasarle los parámetros requeridos.
        super(color, kilometraje, tipo, anio);
        this.modelo = modelo; // Agregamos una propiedad específica de los carros: el modelo.
    }

    // Polimorfismo: redefinimos el comportamiento para el método 'drif', que es exclusivo de los carros.
    drif() {
        document.write("CARRO: Hacer drift de forma épica: O(∩_∩)O <br>");
    }

    // Método estático que no requiere una instancia de la clase para ser usado.
    static conducir() {
        alert("Estoy conduciendo");
    }
}

// Herencia: creamos una clase 'Moto' que también extiende la clase base 'Vehiculo'.
class Moto extends Vehiculo {
    constructor(color, kilometraje, tipo, anio, carroLateral) {
        // Llamamos al constructor de la clase base usando 'super'.
        super(color, kilometraje, tipo, anio);
        this._carroLateral = carroLateral; // Agregamos una propiedad específica de las motos: el carro lateral.
    }

    // Getters y setters para acceder y modificar las propiedades encapsuladas.
    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get kilometraje() {
        return this._kilometraje;
    }

    set kilometraje(value) {
        this._kilometraje = value;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(value) {
        this._tipo = value;
    }

    get anio() {
        return this._anio;
    }

    set anio(value) {
        this._anio = value;
    }

    get carroLateral() {
        return this._carroLateral;
    }

    set carroLateral(value) {
        this._carroLateral = value;
    }

    // Polimorfismo: definimos un método exclusivo de las motos llamado 'hacerCaballito'.
    hacerCaballito() {
        document.write("MOTO: Hacer caballito ☆*: .｡. o(≧▽≦)o .｡.:*☆ <br>");
    }
}

// Creamos una instancia de 'Moto' llamada 'motoHernan' con propiedades específicas.
const motoHernan = new Moto("Amarillo", 1000, "moto", "2015", "chiquito");

// Mostramos la información de la moto utilizando el método 'verInfo' heredado de 'Vehiculo'.
motoHernan.verInfo();

// Modificamos el color usando el setter.
motoHernan.color = "Morado";
document.write(`Nuevo color de la moto: ${motoHernan.color} <br>`);

// Creamos una instancia de 'Carro' llamada 'carroFelipe' con propiedades específicas.
const carroFelipe = new Carro("Verde", 0, "carro", "2000", "estándar");

// Mostramos la información del carro utilizando el método 'verInfo' heredado de 'Vehiculo'.
carroFelipe.verInfo();

// Llamamos al método estático 'conducir' de la clase 'Carro'.
Carro.conducir();

// Mostramos un encabezado para indicar las acciones específicas de los vehículos.
document.write("------------------------- ACCIONES DE VEHÍCULOS ----------------- <br>");

// Llamamos al método 'drif' del objeto 'carroFelipe' para mostrar su acción específica.
carroFelipe.drif();

// Llamamos al método 'hacerCaballito' del objeto 'motoHernan' para mostrar su acción específica.
motoHernan.hacerCaballito();
