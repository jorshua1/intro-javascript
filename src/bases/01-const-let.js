//Variables y constantes

const nombre = "Jorshua";
const apellido = "Henrnandez";

let valorDado = 5;
// let valorDado = 4; no es necesario llamar nuevamente la palabra let para actualizar el valor de una variable
valorDado = 4;

console.log(nombre, apellido, valorDado);

// var no se puede usar
if (true) {
  //aqui se presenta el uso de los scopes, el nombre de abajo solo existe dentro de este if, es totalmente diferente al nombre que se encuentra por fuera del if
  const nombre = "Peter";
  console.log(nombre);
}

console.log(valorDado);
