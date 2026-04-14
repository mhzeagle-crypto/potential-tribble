//NagyKep.js

export default class NagyKep {
    constructor(src, cim, leiras, szuloElem) {
        this.src = src;
        this.cim = cim;
        this.leiras = leiras;
        this.szuloElem = szuloElem;

        this.kepElem = null;

        this.megjelenit();
    }

    megjelenit() {
        this.szuloElem.innerHTML = "";

        this.kepElem = document.createElement("div");
        this.kepElem.classList.add("nagykep");

        this.kepElem.innerHTML = `
            <img src="${this.src}" alt="${this.cim}">
            <h2>${this.cim}</h2>
            <p>${this.leiras}</p>
        `;

        this.szuloElem.appendChild(this.kepElem);
    }
}