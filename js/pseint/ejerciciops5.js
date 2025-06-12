//Calcular el precio con descuento:
// Crear un algoritmo que permita ingresar el precio de un producto y aplicar un descuento del 15% si el precio es mayor a 1000. Mostrar el precio final.

const precioInicial = parseFloat(prompt("Ingrese el precio del producto: $"));
let precioFinal = "";

if (precioInicial > 1000) {
  precioFinal = precioInicial * 0.85;
  document.writeln(
    "El precio final de tu producto con descuento es: $" + precioFinal
  );
} else {
  document.writeln("El precio final es (sin descuento): $" + precioInicial);
}
