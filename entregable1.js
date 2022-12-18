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

    static productsList = []

    static randomId = (length) => {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    getProducts = () => {
        console.log(ProductManager.productsList)
    }

    addProduct = () => {
        if (
            ProductManager.productsList.find(item => item.code === this.code)
        ) {
            console.log("Producto ya ingresado, proba con otro")
        } else {
            ProductManager.productsList.push({
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
        let resultadoBuscado = ProductManager.productsList.find(item => item.code === idBuscado)

        if (
            resultadoBuscado === idBuscado
        ) {
            console.log(resultadoBuscado)
        } else {
            console.log(`Error, producto no encontrado`)
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

console.log(ProductManager.productsList);

productoNuevo3.getProductById("abc457");