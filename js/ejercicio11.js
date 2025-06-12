/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210




Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

const numero = parseInt(prompt("Introduce un número:"));

//creo una variable para ver si es divisible para cada numero.
const esDiv2 = numero % 2 === 0;
const esDiv3 = numero % 3 === 0;
const esDiv5 = numero % 5 === 0;
const esDiv7 = numero % 7 === 0;

let mensaje = "El " + numero;

if (!esDiv2 && !esDiv3 && !esDiv5 && !esDiv7) {
  mensaje += " no es divisible por 2, 3, 5 ni 7.";
} else {
  mensaje += " es divisible por ";

  if (esDiv2 && !esDiv3 && !esDiv5 && !esDiv7) {
    mensaje += "2.";
  } else if (!esDiv2 && esDiv3 && !esDiv5 && !esDiv7) {
    mensaje += "3.";
  } else if (!esDiv2 && !esDiv3 && esDiv5 && !esDiv7) {
    mensaje += "5.";
  } else if (!esDiv2 && !esDiv3 && !esDiv5 && esDiv7) {
    mensaje += "7.";
  } else if (esDiv2 && esDiv3 && !esDiv5 && !esDiv7) {
    mensaje += "2 y por 3.";
  } else if (esDiv2 && !esDiv3 && esDiv5 && !esDiv7) {
    mensaje += "2 y por 5.";
  } else if (esDiv2 && !esDiv3 && !esDiv5 && esDiv7) {
    mensaje += "2 y por 7.";
  } else if (!esDiv2 && esDiv3 && esDiv5 && !esDiv7) {
    mensaje += "3 y por 5.";
  } else if (!esDiv2 && esDiv3 && !esDiv5 && esDiv7) {
    mensaje += "3 y por 7.";
  } else if (!esDiv2 && !esDiv3 && esDiv5 && esDiv7) {
    mensaje += "5 y por 7.";
  } else if (esDiv2 && esDiv3 && esDiv5 && !esDiv7) {
    mensaje += "2, por 3 y por 5.";
  } else if (esDiv2 && esDiv3 && !esDiv5 && esDiv7) {
    mensaje += "2, por 3 y por 7.";
  } else if (esDiv2 && !esDiv3 && esDiv5 && esDiv7) {
    mensaje += "2, por 5 y por 7.";
  } else if (!esDiv2 && esDiv3 && esDiv5 && esDiv7) {
    mensaje += "3, por 5 y por 7.";
  } else if (esDiv2 && esDiv3 && esDiv5 && esDiv7) {
    mensaje += "2, por 3, por 5 y por 7.";
  }
}

document.writeln(mensaje);
