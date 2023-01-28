import moment  from "moment/moment.js";



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

//Fecha Actual
let currentDate = moment();

console.log(`Fecha Actual: ${currentDate.format('YYYY-MM-DD')}`)

let birthDate = moment("1995-03-27", 'YYYY-MM-DD')

//validar

if(birthDate.isValid()){
    console.log(`Fecha de Nacimiento Valida: ${birthDate.format('YYYY-MM-DD')}`)
}else {
    console.log(`Fecha de Nacimiento NO Valida:`)
}

//Dias transcurridos
let daysPassedSinceBirth = currentDate.diff(birthDate, 'days');

console.log(`Dias transcurridos desde mi nacimiento: ${daysPassedSinceBirth}`)