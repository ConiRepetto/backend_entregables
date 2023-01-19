
let people = [
    {id:1, name:"Coni", last_name:"Repetto", age:27, gender: "F"},
    {id:2, name:"Paula", last_name:"Repe", age:27, gender: "F"},
    {id:3, name:"Dami", last_name:"Carri", age:27, gender: "M"},
]

let person = people.find(p => {
    let test;
    test = p.id === 3; 
    return test;
})

console.log(person)

/////////////////

let i = 0

function prueba1(){
    i = 1;
    let j= 2
    if(true){
        console.log(i)
        console.log(j)
    }
}

prueba1()


// Se creará una clase que permitirá llevar cuentas individuales según cada responsable.
// Definir clase Contador
// La clase se creará con un nombre, representando al responsable del contador.
// El contador debe inicializarse en 0
// Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
// Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
// Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
// Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
// Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
// Realizar prueba de individualidad entre las instancias.


// class Contador {
//     constructor(responsable){
//         this.responsable = responsable;
//         this.contador = 0
//     }
    
//     static contadorGlobal = 0 //

//     getResponsable = () =>{
//         console.log(`El responsable es ${this.responsable}`)
//     }

//     contar = () => {
//         console.log( 
//             this.contador ++,
//             Contador.contadorGlobal ++
//         )
//         return (contadorGlobal = contadorGlobal + 1)
//     }

//     getCuentaIndividual = () => {
//         console.log(`Cuenta de ${this.responsable} es ${this.contador} `)
//     }

//     getCuentaGlobal= () => {
//         console.log(`Cuenta global es ${Contador.contadorGlobal} `)
//     }

// }

// let Coni = new Contador("Coni")
// let Dami = new Contador ("Dami")
// console.log(Coni)


// class Auto {
//     constructor(marca, modelo, anio, precio, stock) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.anio = anio;
//         this.precio = precio;
//         this.stock = stock;
//     }
//     descontarStock() {
//         this.stock = false
//         console.table(this.Auto)
//     };
// }

// let auto1 = new Auto('Chevrolet', 'Meriva', 2008, 5000, true)
// let auto2 = new Auto('Toyota', 'Etios', 2017, 10000, false)
// let auto3 = new Auto('Toyota', 'Yaris', 2020, 20000, true)
// let auto4 = new Auto('Peugeot', '208', 2015, 15000, false)


// const concesionaria = []

// function agregarAuto(auto){
//     concesionaria.push(auto)
//     console.table(concesionaria)
// }

// agregarAuto(auto1)
// agregarAuto(auto2)
// agregarAuto(auto3)
// agregarAuto(auto4)
