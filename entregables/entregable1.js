
// X Realizar una clase “ProductManager” que gestione un conjunto de productos. X
// X Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.X
// XCada producto que gestione debe contar con las propiedades:
// Xtitle (nombre del producto)
// Xdescription (descripción del producto)
// Xprice (precio)
// Xthumbnail (ruta de imagen)
// Xcode (código identificador)
// Xstock (número de piezas disponibles)
// X Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
// X Validar que no se repita el campo “code” y que todos los campos sean obligatorios
// Al agregarlo, debe crearse con un id autoincrementable
// Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
// Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
// En caso de no coincidir ningún id, mostrar en consola un error “Not found”
// Formato del entregable

// Archivo de Javascript listo para ejecutarse desde node.

//  Se creará una instancia de la clase “ProductManager”
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

class ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
        this.id = ProductManager.randomId(5)
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock
    }

    static products = []

    static randomId = (length) => {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    getProducts = () => {
        console.log(ProductManager.products)
    }

    addProduct = () => {
        if (
            ProductManager.products.find(item => item.code === this.code)
        ) {
            console.log("Producto ya ingresado, proba con otro")
        } else {
            ProductManager.products.push({
                id: `${this.id}`,
                title: `${this.title}`,
                description: `${this.description}`,
                price: `${this.price}`,
                thumbnail: `${this.thumbnail}`,
                code: `${this.code}`,
                stock: `${this.stock}`,
            }), console.log(`Se agrego tu producto " ${this.title} " ! `)
        }
    }

    getProductById = (idBuscado) => {
        let resultadoBuscado = ProductManager.products.find(item => item.id === idBuscado)

        if (
            resultadoBuscado === idBuscado
        ) {
            console.log(resultadoBuscado)
        } else {
            console.log(`Not found`)
        }
    }

}


let productoNuevo1 = new ProductManager("producto prueba 1", "Este es un producto prueba", 200, 'Sin imagen', "abc123", 25) //  Se creará una instancia de la clase “ProductManager”

let productoNuevo2 = new ProductManager("producto prueba 2", "Este es un producto prueba", 500, 'Sin imagen', "abc123", 25);

let productoNuevo3 = new ProductManager("producto prueba 3", "Este es un producto prueba", 600, 'Sin imagen', "abc456", 25);

productoNuevo1.getProducts(); // Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

productoNuevo1.addProduct(); // Se llamará al método “addProduct”

productoNuevo1.getProducts();

productoNuevo2.addProduct(); //devuelve error porque ya hay un producto con el mismo codigo que el nuevo producto

productoNuevo3.addProduct();

console.log(ProductManager.products);

productoNuevo3.getProductById("abc457");
