console.log("hola mundo!!!")

//calculadora

let primerNumero = 1
let segundoNumero = 2

/**
 * 
 * Esta función realiza una suma 
 * param: n1 & n2
 * return suma (n1,n2)
 */
function sumaDeNumeros(n1, n2){
    return n1 + n2
}

const restaDeNumeros = function(n1, n2){
    return n1 - n2
}

const multiplicacionDeNumeros = (n1, n2) => n1 * n2
const divisionDeNumeros = (n1, n2) => n1 / n2

/**
 * pageWriter
 * función para imprimir texto en pantalla
 * @param {string} operacionImprimir - la operación que se realizó
 * @param {number} valor - valor a imprimir
 * @returns null
 */

const pageWriter = (operacionImprimir, valor) => {
    let textoImprimir = `<h2>La ${operacionImprimir} total es : ${valor} </h2>`
    document.write(textoImprimir)
    return null
}

let sumaTotal = sumaDeNumeros(primerNumero, segundoNumero)
let restaTotal = restaDeNumeros(primerNumero, segundoNumero)
let multiplicacionTotal = multiplicacionDeNumeros(primerNumero, segundoNumero)
let divisionTotal = divisionDeNumeros(primerNumero, segundoNumero)

//pageWriter("suma", sumaTotal)
//pageWriter("resta", restaTotal)
//pageWriter("multiplicación", multiplicacionTotal)
//pageWriter("división", divisionTotal)


//document.write(`<h2>La suma total es : ${sumaTotal} </h2>`)
//document.write(`<h2>La resta total es : ${restaDeNumeros(primerNumero, segundoNumero)} </h2>`)

//si quiero poner todo el código junto en una función principal (main) para hacer, por ejemplo, una calculadora

function pedirOperacion(){
    let operacion = prompt(
        `
        <li>1 - suma</li>
        <li>2 - resta</li>
        <li>3 - multiplicación</li>
        <li>4 - división</li>
        <li>5 -> no la compliques</li>
        `
    )
    return operacion
}

function tomarNumeros(){
    let numero = prompt(`Número a ingresar`)
    return Number(numero)
}

function realizarCalculo(fnCalculo, n1, n2){
    return fnCalculo(n1, n2)
}

const imprimirCalculo = pageWriter

function main(){
    document.write(
        `<h2>Vas a hacer una calculadora de manera manual</h2>
        <p>
        </p>`
    )
}

let operacion = pedirOperacion()
let n1 = tomarNumeros()
let n2 = tomarNumeros()
let operacionMatematica
let nombreOperacion

if (operacion == 1){
    operacionMatematica = sumaDeNumeros
    nombreOperacion = "suma"
}
else if (operacion == 2){
    operacionMatematica = restaDeNumeros
    nombreOperacion = "resta"
}
else if (operacion == 3){
    operacionMatematica = multiplicacionDeNumeros
    nombreOperacion = "multiplicación"
}
else if (operacion == 4){
    operacionMatematica = divisionDeNumeros
    nombreOperacion = "división"
}
else{
    operacionMatematica = (n1, n2) => " "
    nombreOperacion = "nada"
}

let resultado = realizarCalculo(operacionMatematica, n1, n2)

imprimirCalculo(nombreOperacion, resultado)

main()