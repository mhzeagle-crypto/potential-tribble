import Kep from "./Kep.js";


export default class Kepek {
    constructor(lista, szuloElem) {
        this.lista = lista;         
        this.szuloElem = szuloElem; 

        this.megjelenit();
    }

    megjelenit() {
        this.szuloElem.innerHTML = "";

        this.lista.forEach((adat, index) => {
            new Kep(
                adat.src,
                adat.cim,
                adat.leiras,
                index,
                this.szuloElem
            );
        });
    }
}