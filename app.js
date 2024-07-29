//querySelector va a seleccionar un elemento HTML
//let titulo = document.querySelector("h1");
//innerHTML permite reasignar valor al elemento.
let numeroSecreto;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroSecreto === numeroUsuario) {
        asignarTexto("p", `Correcto!!! Acertaste en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
        //Habilita boton "nuevo juego"
        document.getElementById("reiniciar").removeAttribute("disabled");
        //El usuario no acerto
    } else {
        limpiarCaja();
        if (numeroSecreto < numeroUsuario) {
            asignarTexto(`p`, `Incorrecto! El numero secreto es menor.`)
        } else {
            asignarTexto(`p`, `Incorrecto! El numero secreto es mayor`)
        };
    }
    intentos++;
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(listaNumerosSorteados);
    //Verificar que haya mas numeros por sortear
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTexto("p", "Ha alcanzado el numero máximo de sorteos.");
    } else {
        //Genera un nuevo numero si es que ya se ha sorteado
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTexto("h1", "El juego del numero secreto");
    asignarTexto("p", `Ingresar un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    return;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Condiciones iniciales
    condicionesIniciales();
    //Desabilitar nuevo juego

    return;
}

condicionesIniciales();