/*
Ex. 4.1.13 (*) - Looping an array
Create an array of five numbers. Write a for loop to sum the numbers
*/


let myArray = [1,3,5,7,9];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i]  ;

}
console.log(sum)
