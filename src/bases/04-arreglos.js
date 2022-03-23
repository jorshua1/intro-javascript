// !Arreglos

const arreglo = [1, 2, 3, 4];

// !no es recomendable usar el push dado a que modifica el arreglo inicial
// arreglo.push(1); agrega 1 en la posicion 0
// arreglo.push(2); agrega 2 en la posicion 1
// arreglo.push(3); agrega 3 en la posicion 2
// arreglo.push(4); agrega 4 en la posicion 3

//? una forma correcta de hacerlo puede ser usando el operador spread, lo que hace es extraer el contenido y luego envia cada uno de los valores individualment en el nuevo arreglo como se ve en el ejemplo de abajo
let arreglo2 = [...arreglo, 5];

//* uso del metodo map, crea un nuevo arreglo rompiendo la referencia del arreglo original
const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

