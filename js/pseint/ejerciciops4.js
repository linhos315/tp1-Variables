//Determinar si un número es par o impar: 
// Crear un algoritmo que permita al usuario ingresar un número y determinar si es par o impar. Mostrar el resultado.

const number = (parseInt(prompt("Ingrese un numero:")))

if (number % 2 === 0){
    document.writeln("El numero es par")
}else{
    document.writeln("EL numero es impar")
}