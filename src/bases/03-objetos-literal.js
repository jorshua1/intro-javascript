//  !OBJETOS LITERALES

const persona = {
  //Este objeto se crea apartir de un objeto prototype el cual trae unas propiedades por defecto
  //  *Los objetos se pueden usar como diccionarios
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  //puede contener objetos
  direccion: {
    ciudad: "Nueva York",
    zip: 55862,
    lat: 124.554,
    lng: 354.55,
  },
};

console.table(persona);

//copia de referencia al espacio en memoria de la variable persona
const persona2 = persona;
persona2.nombre = "Peter";

//si se cambia la posicion del console.log de la linea 18 y se pone en esta linea ambas salidas seran actualizadas es decir la el objeto persona obtendra los mismos datos que persona2
console.table(persona2);

// para evitar este problema podemos usar el operador spread el cual creara un objeto nuevo apartir de los datos del objeto al cual se esta copiando
const persona3 = { ...persona };
persona3.nombre = "Miyuki";

console.table(persona3);
