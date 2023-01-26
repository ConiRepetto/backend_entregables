// Consigna

// Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1).
// Aspectos a incluir

// La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.

// Debe guardar objetos con el siguiente formato:
// id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
// title (nombre del producto)
// description (descripción del producto)
// price (precio)
// thumbnail (ruta de imagen)
// code (código identificador)
// stock (número de piezas disponibles)

// Aspectos a incluir

// Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).
// Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.
// Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto

// Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
// Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.
// Formato del entregable

// Archivo de javascript con el nombre ProductManager.js







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