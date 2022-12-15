const suma = (num1, num2) => {
    return new Promise ((resolve, reject) => {
        if(num1 === 0 || num2 === 0) reject ("Operacion invalida")
        if (num1 + num2 < 0) reject("Cuenta negativa")
        resolve(num1 + num2);
    }
    )
}

