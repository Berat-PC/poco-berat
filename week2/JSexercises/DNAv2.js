let inputDNA = prompt("Please type your DNA only with the letters ACGT : ");

if (inputDNA.length > 1000){
inputDNA = prompt("Please type your DNA less than 1000 letters : ");
}

// check if each element of DNA input is A , C , G ,T

function validateDNA(sequenceOfDNA) {
    for (let nucleotid of sequenceOfDNA) {
        if (nucleotid != "A" && nucleotid != "C" && nucleotid != "G" && nucleotid != "T") {
            return false;
        }
    }
    return true;
}
//4. while this validation is false => re prompt the binary number.
 while (!validateDNA(inputDNA)) {
     console.log('[!] This is not DNA . Please enter again.');
     inputDNA = prompt('[?] Enter DNA sequence: ');
 }



let countA =0;
let countC =0;
let countG =0;
let countT =0;


for (let letter of inputDNA) {
    
    switch (letter) {
    
        case "A":
            countA += 1;
            break;
            
        case "C":
            countC += 1;
            break;
            
        case "G":
            countG += 1;
            break;
            
        case "T":
            countT += 1;
            break;
            
    }
    
}
console.log("Your DNA sequence contains (ACGT respectively): " +  countA + " " + countC + " " + countG +" "+ countT )
