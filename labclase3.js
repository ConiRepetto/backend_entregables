// Dados los objetos indicados en la siguiente diapositiva:
// Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
// Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)


const objetos = [{
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2,
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]


let newArrayTipos = []


objetos.forEach(objeto => { //recorro el objeto 
    const keys = Object.keys(objeto); // creo una const donde voy a guardar las keys dentro del objeto
    keys.forEach(key => { //recorro el nuevo array de keys 
        if (!newArrayTipos.includes(key)) newArrayTipos.push(key) //antes de PUSHEAR cada key al array que cree antes, checkeo que no este ya agregada.
    })
})

let newArrayVendidos = []
let totalVendido = 0

objetos.forEach(objeto => { //recorro el objeto 
    const values = Object.values(objeto); // creo una const donde voy a guardar las keys dentro del objeto
    newArrayVendidos.push(values) //antes de PUSHEAR cada key al array que cree antes, checkeo que no este ya agregada.
    newArrayVendidos[0].forEach(function (numero) {
        totalVendido += numero;
    })
    newArrayVendidos[1].forEach(function (numero) {
        totalVendido += numero;
    })
})

console.log(newArrayVendidos)
console.log(totalVendido)
console.log(newArrayTipos)