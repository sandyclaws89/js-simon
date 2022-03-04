

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
let arrCorrectNum =[];
let arrWrongNum = [];
let arrUserNum = [];
let randomNum;
let wrongNum=0;
let userChoice;
let correctNum=0;
for (i=0; i<5; i++){
    // let randomNum;
    do { /* FIXME: NON FUNZIONA*/
        randomNum = (Math.floor(Math.random() * (100 - 1)));
    } while (arrRandomNum.includes(randomNum));
    arrRandomNum.push(Math.floor(Math.random() * (100 - 1)));
    // alert(arrRandomNum);
}
/*STAMPO I NUMERI CASUALI*/ 
console.log(arrRandomNum);

/*CHIAMO LA FUNZIONE CHE LI FA SPARIRE DOPO 2 SECONDI*/
setTimeout(emptyScreenFunction, 2000);
function emptyScreenFunction(){

    // PULISCO LO SCHERMO
    console.log('');

    // CICLO FOR PER CHIEDERE ALL'UTENTE QUALI ERANO I NUMERI
    for(n=0;n<5;n++){
        // CHIEDI QUALE ERA IL NUMERO (IN POSIZIONE N), CON CONTROLLO DI INSERIMENTO SOLO NUMERI
        
        userChoice = parseInt(prompt(`quale era il ${n+1}° numero?`));
        while(isNaN(userChoice)){
            alert('Devi inserire un numero');
            userChoice = parseInt(prompt(`quale era il ${n+1}° numero?`));
        }  
       
        arrUserNum.push(userChoice);

        // SE LA SCELTA DELL'UTENTE E' UGUALE AL NUMERO IN POSIZIONE N DELL'ARRAY DEI NUMERI CASUALI ALLORA AUMENTA IL CONTATORE WRONGNUM
        if (userChoice!= arrRandomNum[n]){
                wrongNum++;
                arrWrongNum.push(userChoice);
                // console.log(wrongNum)      
        }
        // ALLTRIMENTI AUMENTA IL CONTATORE CORRECTNUM E INSERISCI IL NUMERO NELL'ARRAY DEI NUMERI CORRETTI
        else {
            correctNum++;
            arrCorrectNum.push(userChoice);
        }
    }
   
    for (l=0; l<5; l++) {
        if (arrRandomNum[l]== arrUserNum[l]){
            console.log(`Il ${l+1}° num. era ${arrRandomNum[l]}, l'utente ha selezionato ${arrUserNum[l]} HAI INDOVINATO`);
        } else {
            console.log(`Il ${l+1}° num. era ${arrRandomNum[l]}, l'utente ha selezionato ${arrWrongNum[l]} NON HAI INDOVINATO`);
        }
    }
    console.log(`Hai indovinato ${correctNum} numeri.
Hai sbagliato ${wrongNum} numeri.
`);
}