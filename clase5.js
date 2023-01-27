// let objetoNums = {

// }


// function random() {
//     for (let i = 0; i < 10000; i++) {
//         const num = Math.floor(Math.random() * 20) + 1

//         if (condition) {
            
//         } else {
            
//         }

//         objetoNums[num] = objetoNums[num] ? objetoNums[num] + 1 : 1 //if en el objeto Nums existe en num aleatorio entonces ? incrementa en uno el vlor?

//     }
//     console.log(objetoNums)
// }

// random()

//importar dependencia de node "npm i random"

import random from "random"

//creamos funcion 
function GenRandomNum(){
    let randomNumList = []
    for(let i = 0; i < 10000; i++) {
        let randomNumber = random.int(1, 20);
        randomNumList.push(randomNumber)
    }
    return randomNumList;
}

let counts = {}

let randomNumList = GenRandomNum()
randomNumList.forEach(function (number) {
    if(!counts[number]){
        counts[number] = 1; 
    } else{
        counts[number]++
    }
})
console.log(counts)