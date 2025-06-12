/* 
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2.

*/

const number = parseInt(prompt("Ingrese un numero"));

if (number % 2 === 0) {
  document.writeln("El " + number + " es divisible por 2");
} else if (number % 3 === 0) {
  document.writeln("El " + number + " es divisible por 3");
} else if (number % 5 === 0) {
  document.writeln("El " + number + " es divisible por 5");
} else if (number % 7 === 0) {
  document.writeln("El " + number + " es divisible por 7");
} else {
  document.writeln("El " + number + " no es divisible en 2,3,5 o 7");
}
