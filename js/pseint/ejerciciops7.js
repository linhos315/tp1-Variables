/*Calcular el perímetro y área de un rectángulo: 

Crear un algoritmo que permita al usuario ingresar el largo y el ancho de un rectángulo, y calcular su perímetro y área. Las fórmulas son:

Perímetro: P = 2*(largo+ancho)
Área: A=largo×ancho

*/



const Largo = (parseFloat(prompt("Ingrese el valor del largo del rectangulo en cm")));
const Ancho = (parseFloat(prompt("Ingrese el valor del ancho del rectangulo en cm")));

let PerimetroRectangulo = ""
let AreaRectangulo = ""

PerimetroRectangulo = 2*(Largo+Ancho);
AreaRectangulo = Largo*Ancho;

document.writeln("El perimetro del rectangulo es: "+PerimetroRectangulo+ "cm" +" y el area del mismo es: "+AreaRectangulo+ "cm");