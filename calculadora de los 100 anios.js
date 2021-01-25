console.log("Calculadora de los 100 años")

let myAge = 22;
let date = new Date();
let actualYear = date.getFullYear();

function yearsTo100(age) {
    let to100 = 0;
    let año100 = 0;
    for(let i = age; i < 100 ; i++) {
        to100++
        año100 = actualYear + to100
    }
    return [to100, año100];
}

console.log("Años restantes para cumplir 100: " + yearsTo100(22)[0] + "\nLos cumpliras en el año: " + yearsTo100(22)[1]);

