// TIPOS DE DATOS

// String (cadena de texto)
let cadena = "Hola, soy una cadena de texto";

// Number (número)
let numero = 23;

// Booleano (verdadero o falso)
let booleano = true;

// VARIABLES

// Inicialización de variables con diferentes alcances
var globalNumero = 23; // var: tiene un alcance global (no recomendado)
let nombre = "Joaquin"; // let: alcance limitado al bloque donde se define
const PI = 3.1416; // const: valor constante, no se puede reasignar

// Tipos especiales de datos
let indefinido; // undefined: la variable existe pero no está inicializada
let vacio = null; // null: valor intencionalmente vacío
let noEsNumero = "abc" * 3; // NaN: resultado de una operación inválida con números

// DECLARACIÓN MÚLTIPLE DE VARIABLES
let num, num1, num2, num3, num4, num5, num6, num7, num8, num9, num10;

// Mostrar un valor con alert
alert(PI);

// PEDIR DATOS AL USUARIO

// Uso de prompt para solicitar datos
let nombreUsuario = prompt("¿Cuál es tu nombre?");

// Concatenación de cadenas
alert("Tu nombre es: " + nombreUsuario); // Concatenación usando el operador '+'

// CONCATENACIÓN DE STRINGS

// Concatenar utilizando .concat
let valor = "23";
let valor1 = 9;
let valoresConcatenados = valor.concat(valor1); // Resultado: "239"

// Concatenación con template literals
let frase1 = "Me fui a Galápagos";
let nombre1 = "Pedrito";
let frase = `Soy ${nombre1} y ${frase1}`;
console.log(frase);

// Uso de comillas simples y dobles en cadenas
let frase2 = "Eres un 'tonto', ¿entiendes?";
let frase3 = 'No soy "tonto", ¿entiendes?';

