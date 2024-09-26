/*
! Ex. 4.1.5 (*) - Even or Odd
Write a program that asks for the user to input a number:
• If the number is even, print "The number is even."
• If the number is odd, print "The number is odd."
• If it is not a number, print "This is not a number."

*/

let inputNumber = Number(prompt("Please write a number :"));

if (isNaN(inputNumber)) {
    alert("This is not a number.");

} else if (inputNumber%2 === 0) {
    alert ("The number is even.");
} 
else alert ("The number is odd.");