//Pedir la edad y decir si es mayor de edad:
// Crear un algoritmo que pida la edad del usuario y determine si es mayor de edad (18 años o más).

const edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
  document.writeln("Usted es mayor de edad");
} else {
  document.writeln("Usted es menor de edad");
}
