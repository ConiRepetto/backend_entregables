//Clase constructora de USUARIOS

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    //Metodo para agregar mascota
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    //Metodo para devolver cantidad de mas cotas agregadas para este usuario
    countMascotas() {
        return this.mascotas.length
    }

    //Metodo para agregar libro y autor
    addBook(book, author) {
        this.books.push({
            name: book,
            author: author
        })
    }

    //Devolver el listado de libros agregados
    getBooks(){
        let arrayNombres = []
        for (let i = 0; i < this.libros.length; i++) {
            arrayNombres.push(this.libros[i].nombre)
        }
        return arrayNombres
    }


    getFullName(){
        return `Nombre Completo: ${this.nombre} ${this.apellido}`
    }
}

//Agregar datos:

let usuarioConi = new Usuario("Constanza", "Repetto", "HarryPotter", "Perro")

