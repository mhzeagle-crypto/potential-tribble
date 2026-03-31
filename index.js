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
    }
];

const galeriaElem = document.getElementById("galeria");

new Kepek(lista, galeriaElem);

window.addEventListener("kivalaszt", (e) => {
    console.log("Kiválasztott kép index:", e.detail);
});