/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.

*/

const number = parseInt(prompt("Ingrese un numero"));

if (number % 2 === 0) {
  document.writeln("Su numero es divisible por 2");
} else {
  document.writeln("Su numero no es divisible por 2");
}
