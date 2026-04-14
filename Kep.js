//Kep.js

export default class Kep {
    constructor(src, cim, leiras, index, szuloElem) {
        this.src = src;
        this.cim = cim;
        this.leiras = leiras;
        this.index = index;
        this.szuloElem = szuloElem;

        this.kepElem = null;

        this.megjelenit();
    }

    megjelenit() {
        this.kepElem = document.createElement("div");
        this.kepElem.classList.add("kep");

        this.kepElem.innerHTML = `
            <img src="${this.src}" alt="${this.cim}">
        `;

        this.szuloElem.appendChild(this.kepElem);

        
        this.kepElem.addEventListener("click", () => {
            const esemeny = new CustomEvent("kivalaszt", {
                detail: this.index
            });

            window.dispatchEvent(esemeny);
        });
    }
}