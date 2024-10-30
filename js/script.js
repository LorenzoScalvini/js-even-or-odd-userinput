const array = [1, 3, 5, 2, 10, 6, 4, 9];
let isEvenOrOdd = true;

function evenOrOdd(userInput) {
    let resultArray = [];

    if (userInput === 'even') {
        isEvenOrOdd = true;
        console.log('even');
    } else if (userInput === 'odd') {
        isEvenOrOdd = false;
        console.log('odd');
    } else {
        console.log('Invalid input. Please enter "even" or "odd".');
        return;
    }

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (isEvenOrOdd && element % 2 === 0) {
            resultArray.push(element);
        } else if (!isEvenOrOdd && element % 2 !== 0) {
            resultArray.push(element);
        }
    }

    console.log(resultArray);
}

// Stampa array allo start
console.log(array);

// input dell'utente
let userChoice = prompt("Scrivi 'even' o 'odd': ").toLowerCase();
// Richiamo la funzione
evenOrOdd(userChoice);

