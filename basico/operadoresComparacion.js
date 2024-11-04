// Compara si 2 es igual a 2
let igualQue = 2 == 2;
console.log(igualQue); // Imprime: true

// Compara si 3 es diferente de 2
let diferenteDe = 3 != 2;
console.log(diferenteDe); // Imprime: true

// Compara si 14 es estrictamente igual a "texto"
// Esto verificará tanto el tipo como el valor
/*
1. Tipo: Se refiere a la clase de datos del operando. En JavaScript, los tipos de datos básicos son:

Number: números (como 14, 3.14, etc.)
String: cadenas de texto (como "texto", "12", etc.)
Boolean: valores verdadero (true) o falso (false)
Object, Array, etc.: tipos más complejos.

2.- Valor: Es el contenido real que tienen los operandos. Por ejemplo:

El número 14 tiene un valor de 14.
La cadena de texto "texto" tiene un valor de "texto".*/
let exactamenteIdentico = 14 === "texto";
console.log("Identico: "+ exactamenteIdentico); // Imprime: false

// Compara si "12" es estrictamente diferente de 43
let estrictamenteDiferente = "12" !== 43;
console.log(estrictamenteDiferente); // Imprime: true

// Compara si 23 es mayor que 43
let mayorQue = 23 > 43;
console.log(mayorQue); // Imprime: false

// Compara si 23 es mayor o igual que 43
let mayorIgualQue = 23 >= 43;
console.log(mayorIgualQue); // Imprime: false

// Compara si 23 es menor que 43
let menorQue = 23 < 43;
console.log(menorQue); // Imprime: true

// Compara si 23 es menor o igual que 43
let menorIgualQue = 23 <= 43;
console.log(menorIgualQue); // Imprime: true

