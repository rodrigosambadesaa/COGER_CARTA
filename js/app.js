"use strict";


const shadow_dom = document.querySelector(".shadow-dom"); // Nodo/contenedor del dom donde cargaremos las cartas 



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
const palos = ["corazones", "diamantes"];
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
    //barajamos las cartas
    //Recordar sort: -1 a,b; +1 b,a; 0 a y b como estaban
    baraja.sort(() => Math.random() - 0.5);
}


/**
 * Función que nos pinta la carta también meteremos los eventos
 */
const pintarCartas = () => {
    const shadow = shadow_dom.attachShadow({ mode: 'open' });
    const css = document.createElement("style");
    const js = document.createElement("script");
    const barajaEl = document.createElement("div");
    barajaEl.classList.add("baraja");

    css.textContent = `
    .baraja{display:flex;justify-content: center;flex-wrap:wrap;gap:1em}.baraja div{flex-basis:154px;height:254px;background-color:tomato;background-image:url(../img/corazones.jpg);background-position:-20px -16px;cursor:pointer}.baraja div[class^=corazones]{background-image:url(../img/corazones.jpg)}.baraja div[class^=diamantes]{background-image:url(../img/diamantes.jpg)}.baraja div[class^=picas]{background-image:url(../img/picas.jpg)}.baraja div.corazones-1{background-position:-20px -16px}.baraja div.corazones-2{background-position:-187px -16px}.baraja div.corazones-3{background-position:-356px -16px}.baraja div.corazones-4{background-position:-523px -16px}.baraja div.corazones-5{background-position:-692px -16px}.baraja div.corazones-6{background-position:-856px -16px}.baraja div.corazones-7{background-position:-1027px -16px}.baraja div.corazones-8{background-position:-20px -281px}.baraja div.corazones-9{background-position:-187px -281px}.baraja div.corazones-10{background-position:-356px -281px}.baraja div.corazones-11{background-position:-523px -281px}.baraja div.corazones-12{background-position:-692px -281px}.baraja div.corazones-13{background-position:-856px -281px}div.reverso{background-position: -1024px -281px !important;}.baraja div.diamantes-1{background-position:-20px -16px}.baraja div.diamantes-2{background-position:-187px -16px}.baraja div.diamantes-3{background-position:-356px -16px}.baraja div.diamantes-4{background-position:-523px -16px}.baraja div.diamantes-5{background-position:-692px -16px}.baraja div.diamantes-6{background-position:-856px -16px}.baraja div.diamantes-7{background-position:-1027px -16px}.baraja div.diamantes-8{background-position:-20px -281px}.baraja div.diamantes-9{background-position:-187px -281px}.baraja div.diamantes-10{background-position:-356px -281px}.baraja div.diamantes-11{background-position:-523px -281px}.baraja div.diamantes-12{background-position:-692px -281px}.baraja div.diamantes-13{background-position:-856px -281px}.baraja div.picas-1{background-position:-20px -16px}.baraja div.picas-2{background-position:-187px -16px}.baraja div.picas-3{background-position:-356px -16px}.baraja div.picas-4{background-position:-523px -16px}.baraja div.picas-5{background-position:-692px -16px}.baraja div.picas-6{background-position:-856px -16px}.baraja div.picas-7{background-position:-1027px -16px}.baraja div.picas-8{background-position:-20px -281px}.baraja div.picas-9{background-position:-187px -281px}.baraja div.picas-10{background-position:-356px -281px}.baraja div.picas-11{background-position:-523px -281px}.baraja div.picas-12{background-position:-692px -281px}.baraja div.picas-13{background-position:-856px -281px}
    `;

    js.src = "js/shadow_dom.js";

    shadow.appendChild(js);

    for (let carta of baraja) {
        const c = document.createElement("div");
        c.setAttribute("data-id", carta);
        c.classList.add(carta);
        c.classList.add('reverso');
        //c.innerHTML = carta;
        c.onclick = (e) => {
            seleccionCarta(e);
        }
        barajaEl.appendChild(c);
        shadow.appendChild(css);
        shadow.appendChild(barajaEl);

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

