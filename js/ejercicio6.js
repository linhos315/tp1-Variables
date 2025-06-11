/* 
6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande

*/

const numero1 = parseInt(prompt("Ingrese un numero"));
const numero2 = parseInt(prompt("Ingrese un segundo numero"));

if (numero1 > numero2) {
  document.writeln("el mayor es " + numero1);
} else {
  if (numero1 < numero2) {
    document.writeln("el mayor es " + numero2);
  } else {
    document.writeln("ambos numeros son iguales");
  }
}
