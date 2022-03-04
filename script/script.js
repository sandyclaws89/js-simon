

/*Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

/*PSEUDOCODIFICA
-CREA UNA ARRAY CON 5 NUMERI CASUALI E RENDILI VISIBILI
-CON UN SETTIMEOUT FALLI SCOMPARIRE DOPO 30 SECONDI (CONSOLE LOG VUOTO)
-IN UNA FOR CON 5 ITERAZIONI CHIEDO ALL'UTENTE QUALI FOSSERO I NUMERI IN ORDINE.
    -SE UN NUMERO INSERITO NON CORRISPONDEVA INCREMENTA IL CONTATORE DEI NUMERI SBAGLIATI
-ALLA FINE DELLA FOR STAMPA IL CONTATORE NUMERI SBAGLIATI E DIGLI QUALI SONO QUELLI GIUSTI*/

let arrRandomNum = [];
let randomNum
for (i=0; i<5; i++){
    // let randomNum;
    do {
        randomNum = (Math.floor(Math.random() * (100 - 1)));
    } while (arrRandomNum.includes(randomNum));
    arrRandomNum.push(Math.floor(Math.random() * (100 - 1)));
    // alert(arrRandomNum);
}
console.log(arrRandomNum);


setTimeout(emptyScreenFunction, 2000);

function emptyScreenFunction(){
    // alert(arrRandomNum);

    console.log('');
}