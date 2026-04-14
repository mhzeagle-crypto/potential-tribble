//index.js

import Kepek from "./Kepek.js";
import NagyKep from "./NagyKep.js";

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
const nagykepElem = document.getElementById("nagykep");

new Kepek(lista, galeriaElem);

new NagyKep(
    lista[0].src,
    lista[0].cim,
    lista[0].leiras,
    nagykepElem
);

window.addEventListener("kivalaszt", (e) => {
    const index = e.detail;
    const adat = lista[index];

    new NagyKep(
        adat.src,
        adat.cim,
        adat.leiras,
        nagykepElem
    );
});