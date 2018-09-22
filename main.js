function sum(a,b) {
   // var tipoDato = isNaN(a);
    if ( typeof(a) == typeof(b) && typeof(a) == "number" ){
    return a + b
    }else{
        console.log("Ingrese numeros");
    }

}
function resta(a,b) {
    return a - b
}
function mul(a,b) {
    return a * b
}

function div(a,b) {
    return a / b
}

console.log(sum(2,9))
console.log(resta(2,9))
console.log(mul(2,9))
console.log(div(2,9))