///////////////////////////////////

import fs from 'fs'


// Crear un archivo
fs.writeFileSync('./primerTexto.txt', 'Hola Comision 31010!!!')
//ruta del archivo // contenido del archivo

if (fs.existsSync("./primerTexto.txt")) { //verificar que exista
    let contenido = fs.readFileSync("./primerTexto.txt", "utf-8")
    console.log(contenido)

    // Vamos a modificar un archivo con append
    fs.appendFileSync('./primerTexto.txt', 'texto agregado')
    contenido = fs.readFileSync("./primerTexto.txt", "utf-8")
    console.log(contenido)

    fs.unlinkSync("./primerTexto.txt")
}





// // Escribir un archivo sin contenido
// fs.open('./segundoTexto.txt', 'w', function(err, file){
//     if (err) throw err;
//     console.log("Guardado!")
// })

// // Crear un archivo usando write
// fs.writeFileSync('tercerTexto.txt', 'Hola contenido =)', function(err){
//     if (err) throw err;
//     console.log("Guardado!!!");
// })



// // Otra forma de modificar un archivo es con write
// fs.writeFileSync('./segundoTexto.txt', 'Esta es la primer linea!', function(err){
//     if (err) throw err;
//     console.log("El archivo ha sido modificado con exito!");
// });

// // Esta es la forma de borrar un archivo
// fs.unlink('./tercerTexto.txt', function(err){
//     if (err) throw err;
//     console.log("Su archivo ha sido eliminado con exito!!!")
// });