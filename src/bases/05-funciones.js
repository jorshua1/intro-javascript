function saludar(nombre) {
  return `Hola, ${nombre}`;
}

//* muestra por consola la referencia a la funcion
console.log(saludar);

//! sobreescribe la funcion y le da el valor de 30
//todo Es-lint genera una advertencia la cual indica que saludar es una funcion
saludar = 30;
console.log(saludar);

//* una forma para evitar esto (lo de arriba) es convertir la funcion en una constante y a esta se le referencia como funcion
const saludos = function (nombre) {
  return `Saludos de: ${nombre}`;
};
// mostramos en consola
console.log(saludos("Goku"));
//! si intentamos cambiar la funcion no nos dejara dado a que lo declaramos como constante y por ende estas no se pueden alterar luego de asignadas

//? convertir funcion superior a funcion flecha
const saludar2 = (nombre) => {
  return `Hola desde una funcion flecha, ${nombre}`;
};

console.log(saludar2("Vegeta"));

//Todo: las ventajas de la funciones flecha es que si solo requerimos un solo return podemos hacerlo todo en una sola linea, (abajo ejemplo)

const saludar3 = (nombre) => `Hola desde la funcion saludar3, ${nombre}`;
console.log(saludar3("Frezzer"));

//? ACTIVIDAD DE PRACTICA
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const UsuarioActivo = getUsuarioActivo("Jorshua");
console.log(UsuarioActivo);
