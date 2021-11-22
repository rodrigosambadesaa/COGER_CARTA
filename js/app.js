"use strict";


const barajaEl = document.querySelector(".baraja"); //Nodo/contenedor del dom donde cargaremos las cartas 



/**
 * Obtener el valor de la propiedad de un elemento
 * @param {object} HTMLTagElement Un nodo del documento HTML  
 * @param {string} property Propiedad CSS del que se quiere obtener un valor
 * @returns {string} Valor de la propiedad de un nodo (elemento) en CSS
 */
const getPropertyValue = (element, property) => {
    const cssDeclaration = window.getComputedStyle(element); //{object} CSSStyleDeclaration
    return cssDeclaration.getPropertyValue(property);
}


//https://www.freepik.es/vector-gratis/tarjetas-poquer_1185218.htm?query=cartas%20poker
//Faltan treboles
//Funciones
//const palos = ["treboles", "diamantes", "picas", "corazones"]; //palos de una baraja
const palos = ["corazones","diamantes","picas"];
const baraja = []; //array donde cargaremos los palor se una baraja
/**
 * Función que carga las cartas de una baraja
 */
const cargarCartas = () => {
    for (let i = 0, tam = palos.length; i < tam; i++) {
        for (let x = 0; x < 13; x++) {
            const carta = `${palos[i]}-${x + 1}`;
            baraja.push(carta);
        }
    }
    //barajamos
    barajarCartas();
}

/**
 * Función que baraja el array de cartas
 */
const barajarCartas = () => {
    
    for(let i = 0, tam = baraja.length*5; i < tam; i++){
        const x = Math.floor(Math.random()*baraja.length); //indice aleatorio del 0 al 11;
        const z = Math.floor(Math.random()*baraja.length); //indice aleatorio del 0 al 11;
        //desestructuración
        [baraja[x],baraja[z]] = [baraja[z],baraja[x]];
    }
}

/**
 * Función que busca el dataset de un div que coincidirá con el valor en el array de baraja
 * @param {object} e Evento click sobre una carta 
 */
const seleccionCarta = e => {
    //console.log(e.target.dataset.id);
    const target = baraja.findIndex(
        element => {
            return element === e.target.dataset.id;
        }
    );
    baraja.splice(target,1);
    barajaEl.innerHTML = "";
    pintarCartas();
    //console.log(baraja);
    //console.log(target)
}

/**
 * Función que nos pinta la carta también meteremos los eventos
 */
const pintarCartas = () => {
    for(let carta of baraja){
        const c = document.createElement("div");
        c.setAttribute("data-id",carta);
        //c.innerHTML = carta;
        c.classList.add(carta);
        c.onclick = (e) => {
            seleccionCarta(e);
        }
        barajaEl.appendChild(c);
    }
}

/**
 * Función principal en el que comienza el juego
 */
const main = () => {
    cargarCartas();
    pintarCartas();
}



//Lanzamiento aplicacion
main();

