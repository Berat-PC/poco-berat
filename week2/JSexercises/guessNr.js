// Secret number between 0-100
// Prompt user for guess, then print a hint:
//    (for example "secret is higher")
// If the guess was right, congratulate the player and end the game!



let theNumber = 50;



while (true) { 
    let guessInput = Number(prompt("Guess the number between 0 - 100 - Type your guess : "));
    if (guessInput == theNumber) {
        alert("congrats");
    break;

    } else if (guessInput<theNumber) { console.log("Secret Number is bigger then your guess");

    } else if (guessInput>theNumber) { console.log("Secret Number is smaller then your guess");

    }
}
console.log(theNumber)

