"use strict";
function creaScacchiera() {
    let numero = Number(document.getElementById("numero").value);
    let scacchiera = document.getElementById("scacchiera");
    let messaggio = document.getElementById("messaggio");
    scacchiera.innerHTML = "";
    if (messaggio === null) {
        console.error("Valore messaggio non trovato");
        return;
    }
    if (numero < 1 || numero > 10 || !Number.isInteger(numero)) {
        messaggio.innerHTML = "<b>Inserisci un numero da 1 a 10</b>";
        return;
    }
    messaggio.innerHTML = "";
    let tabella = document.createElement("table");
    for (let riga = 1; riga <= numero; riga++) {
        let tr = document.createElement("tr");
        for (let colonna = 1; colonna <= numero; colonna++) {
            let td = document.createElement("td");
            td.innerHTML = String(riga * colonna);
            tr.appendChild(td);
        }
        tabella.appendChild(tr);
    }
    scacchiera.appendChild(tabella);
}
//# sourceMappingURL=main.js.map