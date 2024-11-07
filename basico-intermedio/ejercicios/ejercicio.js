// Variable para controlar si ya hay alguien que ha pasado gratis
let free = false;

// Función para validar la entrada del cliente según su edad y la hora de llegada
const validarCliente = (time) => {
    // Solicita la edad del cliente y convierte el valor ingresado a número
    let edad = parseInt(prompt("¿Cuál es tu edad?"));

    // Verifica si la edad es válida y mayor a 18 años
    if (edad >= 18) {
        // Verifica si la hora es entre 2:00 y 6:59 AM y aún no ha pasado alguien gratis
        if (time >= 2 && time < 7 && !free) {
            alert("Puedes pasar gratis porque eres la primera persona después de las 2 AM");
            free = true; // Marca que alguien ya pasó gratis
        } else {
            alert(`Son las ${time}:00, tienes que pagar la entrada`);
        }
    } else {
        // Si la persona es menor de edad, se le niega la entrada
        alert("Eres menor de edad, no puedes entrar");
    }
}

// Llamadas de ejemplo para la función validarCliente con diferentes horas
validarCliente(23);  // Hora antes de las 2 AM, debería pagar
validarCliente(2);   // Primera persona después de las 2 AM, debería pasar gratis
validarCliente(7);   // Después de las 7 AM, debe pagar
validarCliente(8);   // Después de las 7 AM, debe pagar
validarCliente(12);  // Hora del día, debe pagar
validarCliente(2.4); // Primera persona después de las 2 AM, debe pagar si alguien ya pasó gratis
