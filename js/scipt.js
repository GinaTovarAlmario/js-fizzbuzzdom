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
 let divisibleForBoth = 'FizzBuzz'
 
 const target = document.getElementById('target');
// FASE DI RACCOLTA DATI
 for (let i = 1; i <= 100 ; i++){
    if (i % 3 === 0 && i % 5 === 0 ){
        console.log(i , divisibleForBoth);
        } else if (i % 5 === 0 ){
        console.log(i , divisibleForFive);
        } else if (i % 3 === 0){
        console.log(i , divisibleForThree);
        } else {
        console.log(i);
        }
 }
 console.log(result);
// FASE DI VALIDAZIONE

// FASE DI LAVORAZIONE DATI

// FASE DI OUTPUT