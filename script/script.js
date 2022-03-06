

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

let arrRandomNum = []; /*ARRAY PER I NUMERI CASUALI GENERATI AD OGNI FUNZIONE SETTIMEOUT */
let arrCorrectNum =[];/*ARRAY PER I NUMERI CORRETTI INDOVINATI DALL'UTENTE */
let arrWrongNum = []; /*ARRAY PER I NUMERI SBAGLIATI DALL'UTENTE */
let arrUserNum = []; /*ARRAY PER I NUMERI DIGITATI DALL'UTENTE */
let randomNum=0; /* VARIABILE RANDOMNUM, NUMERI CASUALI GENERATI DA INSERIRE NELL'ARRAY */
let wrongNum=0; /* CONTATORE NUMERI SBAGLIATI */
let correctNum=0; /* CONTATORE NUMERI CORRETTI */
let userChoice; /* VARIABILE A CUI ASSEGNARE IL NUMERO INSERITO DALL'UTENTE */
const containerNum = document.getElementById('output'); /*PRENDI IL DIV CON ID OUTPUT DALL'HTML */

for (let i=0; i<5; i++){
   
    do {
        randomNum = Math.floor(Math.random() * (100-0));
    }
    while (arrRandomNum.includes(randomNum))
    arrRandomNum.push(randomNum);
}

/*STAMPO I NUMERI CASUALI*/ 
containerNum.append(arrRandomNum);
console.log(arrRandomNum);

setTimeout(delayClean, 2950);

// FUNZIONE CHE PULISCE LO SCHERMO POCO PRIMA DELLA RICHIESTA INPUT CON PROMPT
function delayClean() {
    containerNum.innerHTML= '';
}
/*CHIAMO LA FUNZIONE CHE LI FA SPARIRE DOPO 3 SECONDI*/
setTimeout(emptyScreenFunction, 3000);
function emptyScreenFunction(){

    // CICLO FOR PER CHIEDERE ALL'UTENTE QUALI ERANO I NUMERI
    for(n=0;n<5;n++){
        // CHIEDI QUALE ERA IL NUMERO (IN POSIZIONE N), CON CONTROLLO DI INSERIMENTO SOLO NUMERI
        
        userChoice = parseInt(prompt(`quale era il ${n+1}° numero?`));
        while(isNaN(userChoice)){
            alert('Devi inserire un numero');
            userChoice = parseInt(prompt(`quale era il ${n+1}° numero?`));
        }  
       
        arrUserNum.push(userChoice);

        // SE LA SCELTA DELL'UTENTE E' DIVERSO DAL NUMERO IN POSIZIONE N DELL'ARRAY DEI NUMERI CASUALI ALLORA AUMENTA IL CONTATORE WRONGNUM E AGGIUNGI IL NUMERO ALL'ARRAY DEI NUMERI SBAGLIATI
        if (userChoice!= arrRandomNum[n]){
                wrongNum++;
                arrWrongNum.push(userChoice);
              
        }
        // ALTRIMENTI AUMENTA IL CONTATORE CORRECTNUM E INSERISCI IL NUMERO NELL'ARRAY DEI NUMERI CORRETTI
        else {
            correctNum++;
            arrCorrectNum.push(userChoice);
        }
    }
  
    containerNum.classList.add('containerclas');
    for (l=0; l<5; l++) {
        
        if (arrRandomNum [l]== arrUserNum[l]){
           
            let correctOutput = document.createElement('div');
            correctOutput.classList.add ('correct');
            correctOutput.innerHTML = `\n Il ${l+1}° num. era ${arrRandomNum[l]}, l'utente ha selezionato ${arrUserNum[l]} HAI INDOVINATO \n`;
            containerNum.append(correctOutput);
            
           
        } else {
            let wrongOutput = document.createElement('div');
            wrongOutput.classList.add ('wrong');
            wrongOutput.innerHTML = `\n Il ${l+1}° num.\n era ${arrRandomNum[l]}, l'utente ha selezionato ${arrWrongNum[l]} NON HAI INDOVINATO \n`;
            containerNum.append(wrongOutput);
        }

    }
    let finalOutput = `\n Hai indovinato ${correctNum} numeri.
    Hai sbagliato ${wrongNum} numeri.`;
    containerNum.append(finalOutput);
}