/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande

*/

const num1 = parseInt(prompt("Ingrese el primer numero"));
const num2 = parseInt(prompt("Ingrese el segundo numero"));
const num3 = parseInt(prompt("Ingrese el tercer numero"));

if (num1 > num2 && num1 > num3) {
  document.writeln("el mayor es " + num1);
} else {
  if (num2 > num1 && num2 > num3) {
    document.writeln("el mayor es " + num2);
  } else {
    if (num3 > num1 && num3 > num2) {
      document.writeln("el mayor es " + num3);
    } else {
      document.writeln("los numeros son iguales");
    }
  }
}
