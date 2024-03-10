/* Declaracion Individual
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML='Indica un número del 1 al 10';
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumSort = [];
let numeroMaximo = 10;

// Creacion de Funcion para asignar texto a elementos html
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    console.log(intentos);
    // parseInt convierte string a number
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número es menor');
        } else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
        return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumSec();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    // generar numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    // Deshabilidat botton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}


function generarNumSec() {
    let numgen = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numgen);
    console.log(listaNumSort);
    // ya se sortearon todos los numeros
    if(listaNumSort.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon rodos los números posibles');
    } else {
        // si el numero generado esta en la lista
        if (listaNumSort.includes(numgen)) {
            return generarNumSec();
        } else {
            listaNumSort.push(numgen);
            return numgen;
        }
    }
}

condicionesIniciales();