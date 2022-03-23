const nombre = "Jorshua";
const apellido = "Hernandez";

/*  
    *uso normal con strings
    const nombreCompleto = nombre + ' ' + apellido;
    *uso con template (` `)  
    const nombreCompleto = `Hola mundo`;
 */
//uso de template
const nombreCompleto = `${nombre} ${apellido} `;
//templeate agrega salto de linea
const saltoLinea = `
${nombre}
${apellido}
`;

console.log(nombreCompleto);
console.log(saltoLinea);

function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`este es un texto :  ${getSaludo(nombre)}`);
