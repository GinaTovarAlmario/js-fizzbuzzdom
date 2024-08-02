/* TRACCIA

MILESTONE 1
Scrivere un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

MILESTONE 2:
Creiamo un elemento che faccia da contenitore nel DOM e poi riempiamolo con i degli elementi via JS.
Possiamo usare varie tecniche  (template literals, innerHTML, appendecc)

MILESTONE 3:
Applichiamo stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto ci sono usare varie tecniche (style , className, classList)
Se siete a corto di idee per lo stile, potreste prendere spunto dallo screenshot fornito in consegna.


*/

/* LA MIA SCALETTA PER PROCEDERE
- mi preparo le variabili di appoggio
- per la seconda milestone mi creo un elemento nel Dom che faccia da contenitore
-creo il mio ciclo for che mi generi i numeri da 1 a 100
-controllo se il mio risultato è divisibile per 3 per 5 o per entrambi
-stampo in console la mia parola chiave in base al risultato del confronto*/

// controllo prima di ogni cosa
console.log('Js ok');

// FASE DI PREPARAZIONE
 let result = '';
 let divisibleForThree = 'Fizz';
 let divisibleForFive = 'Buzz';
 let divisibleForBoth = 'FizzBuzz';
 // FASE DI RACCOLTA DATI
// prendo il mio elemento dal DOM
 const target = document.getElementById('target');
//  vado a creare un elementop nel DOM e gli attribuisco diverse classi
 const row = document.createElement('div');
 row.classList.add('row');
//  row.classList.add('gx-4');
//  row.classList.add('gy-4');

 // FASE DI LAVORAZIONE DATI

 for (let i = 1; i <= 100 ; i++){
    // controllo se i è divisibile per 3 e 5
    if (i % 3 === 0 && i % 5 === 0 ){
        result = divisibleForBoth;
        console.log(divisibleForBoth);
        // controllo se i è divisibile per 5
    } else if (i % 5 === 0 ){
        result = divisibleForFive;
        console.log(divisibleForFive);
        // controllo se i è divisibile per 3
     } else if (i % 3 === 0){
        result = divisibleForThree;
        console.log(divisibleForThree);
        // stampo i nei casi dove non sono vere le condizioni viste sopra
    } else {
        result = '';
        console.log(i);
    }
    // mi serve un variabile per poter differenziare fra i e le parole date da stampare in pagina
    let itemContent ='';
    if (result){
        itemContent = result;
    } else {
        itemContent= i;
    }
    // creo un elemento nel DOM che anrò a riempire con i miei i
    const col = document.createElement('div');
    // vado ad assegnare al mio elemento diverse classi
    col.classList.add('col-2');
    col.classList.add('py-4');
    col.classList.add('text-center');
    col.classList.add('border');

    col.append(`${itemContent}`);
    row.appendChild(col);

    // ho il caso dei diversi colori in base al risultato
    // rivedere questo punto volevo prima far controllo se il mio elemento aveva già quella classe
    const isRed= col.classList.contains('bg-danger');
    if (result === divisibleForBoth){
        col.classList.add('bg-danger');
        col.classList.remove('bg-warning','bg-success');
    }
    const isYellow= col.classList.contains('bg-warning');
    if( result === divisibleForFive){
        col.classList.add('bg-warning');
        col.classList.remove('bg-danger','bg-success');
    }
    const isGreen= col.classList.contains('bg-success');
    if (result === divisibleForThree) {
        col.classList.add('bg-success');
        col.classList.remove('bg-warning','bg-danger');
    }
    const isBasic= col.classList.contains('bg-primary');
    if (itemContent === i) {
        col.classList.add('bg-primary');
        col.classList.remove('bg-danger','bg-warning','bg-success');
    }
}
// FASE DI OUTPUT
target.appendChild(row);



