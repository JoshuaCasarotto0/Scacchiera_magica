function creaScacchiera(): void {
    let numero: number = Number((document.getElementById("numero") as HTMLInputElement).value);
    let scacchiera: HTMLDivElement = document.getElementById("scacchiera") as HTMLDivElement;
    let messaggio: HTMLElement | null = document.getElementById("messaggio");
    scacchiera.innerHTML = "";

    if(messaggio === null){
        console.error("Valore messaggio non trovato");
        return;
    }

    if (numero < 1 || numero > 10 || !Number.isInteger(numero)) {
        messaggio.innerHTML = "<b>Inserisci un numero da 1 a 10</b>";
        return;
    }

    messaggio.innerHTML = "";

    let tabella: HTMLTableElement = document.createElement("table");

    for (let riga: number = 1; riga <= numero; riga++) {
        let tr: HTMLTableRowElement = document.createElement("tr");

        for (let colonna: number = 1; colonna <= numero; colonna++) {
            let td: HTMLTableCellElement = document.createElement("td");
            td.innerHTML = String(riga * colonna);
            tr.appendChild(td);
        }

        tabella.appendChild(tr);
    }

    scacchiera.appendChild(tabella);
}