import moment  from "moment/moment.js";

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