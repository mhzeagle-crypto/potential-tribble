//index.js

import Kepek from "./Kepek.js";

const lista = [
    {
        src: "img1.jpg",
        cim: "Első kép",
        leiras: "Leírás 1"
    },
    {
        src: "pfp.PNG",
        cim: "Második kép",
        leiras: "Leírás 2"
    },
    {
        src: "img3.jpg",
        cim: "Harmadik kép",
        leiras: "Leírás 3"
    },
];

const galeriaElem = document.getElementById("galeria");

new Kepek(lista, galeriaElem);

const nagykepElem = document.getElementById("nagykep");

window.addEventListener("kivalaszt", (e) => {
    const index = e.detail;
    const adat = lista[index];

    nagykepElem.innerHTML = `
        <img src="${adat.src}" alt="${adat.cim}">
        <h2>${adat.cim}</h2>
        <p>${adat.leiras}</p>
    `;
});