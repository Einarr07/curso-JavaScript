// Métodos de  atributos de un ELEMENTO

const rangoEtario = document.querySelector(".rangoEtario");

// Cambiar el atributo "type" del elemento
rangoEtario.setAttribute("type", "text");

// Obtener el valor del atributo "type"
valorAtributo = rangoEtario.getAttribute("type");
document.write("El valor del atributo es: " + valorAtributo);

// Remover el atributo "type" del elemento
const boolean = document.querySelector(".bool");
boolean.removeAttribute("type");
