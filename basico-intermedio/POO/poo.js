// Definimos una clase llamada 'animal' que representa a un animal con propiedades y métodos.
class animal {

    // Constructor: método especial que se ejecuta automáticamente cuando se crea una nueva instancia de la clase.
    // Recibe los parámetros 'especie', 'edad', y 'color' para inicializar las propiedades del objeto.
    constructor(especie, edad, color) {
        // 'this' hace referencia al objeto que se está creando.
        // Asignamos los valores recibidos como parámetros a las propiedades (propiedad == atributo) del objeto.
        this.especie = especie; // Propiedad 'especie' del objeto.
        this.edad = edad;       // Propiedad 'edad' del objeto.
        this.color = color;     // Propiedad 'color' del objeto.

        // Creamos una propiedad 'informacion' que contiene una descripción del animal como una cadena de texto.
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }

    // Método 'verInformación': permite mostrar la información del animal en el documento.
    // Nota: los métodos de una clase son funciones especiales que actúan sobre las propiedades del objeto.
    verInformación() {
        // Usamos 'document.write' para escribir la información en la página web.
        document.write(this.informacion + "<br>");
    }
}

// Creación de objetos de la clase 'animal' usando el operador 'new'.
// Cada objeto representa una instancia de la clase con propiedades específicas.

// Creamos un objeto 'perro' con los valores "perro", 4, "cafe".
const perro = new animal("perro", 4, "cafe");

// Creamos un objeto 'gato' con los valores "gato", 2, "dorado".
const gato = new animal("gato", 2, "dorado");

// Creamos un objeto 'pescado' con los valores "pescado", 1, "azul".
const pescado = new animal("pescado", 1, "azul");

// Llamamos al método 'verInformación' de cada objeto para mostrar su información en la página.
perro.verInformación(); // Muestra la información del objeto 'perro'.
gato.verInformación();  // Muestra la información del objeto 'gato'.
pescado.verInformación(); // Muestra la información del objeto 'pescado'.

/*
Bloque de código comentado:
Si quisieras mostrar la información directamente usando la propiedad 'informacion' en lugar del método 'verInformación',
podrías hacerlo de la siguiente manera:

document.write("-------------------Información perro-------------------- <br>");
document.write(perro.informacion + "<br>");
document.write("-------------------Información gato-------------------- <br>");
document.write(gato.informacion + "<br>");
document.write("-------------------Información pescado-------------------- <br>");
document.write(pescado.informacion + "<br>");
*/
