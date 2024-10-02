/*
Ex. 4.1.14 (**) - Objects
• Create an object person with properties firstName, lastName, and a method fullName that returns the
full name.
• Create an object student with properties name, age, and an array of objects representing courses (with
courseName and grade). Write a function to log the student’s name and their course grades.
*/ 


var person = {
firstName : "John",
lastName : "Doe"

};



function myFunction (firstName, lastName) 
{ 
    console.log( fullName = (firstName + " " + lastName));
    
};

myFunction("berat", "kaya");

//• Create an object student with properties name, age, and an array of objects representing courses (with courseName and grade). Write a function to log the student’s name and their course grades.

console.log("-----------------------------------------------------------")

var student1 = 
{
    name : "berat",
    age : 18,
    arr : ["English", 2],
    nameAndGrade : function () {
        console.log("Student's name is : " + student1.name )
        console.log("Student's course grade is :  " + student1.arr[1]);
    }

}

student1.nameAndGrade();