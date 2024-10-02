/* Ex. 4.2.2 (**)
Write a program that prints a multiplication table for numbers up to 10. (use nested loops) */



// Function to print multiplication table
function multiplicationTable() {
    // Outer loop for rows (1 to 10)
    for (let i = 1; i <= 10; i++) {
      let row = '';  // Initialize an empty string for each row
      
      // Inner loop for columns (1 to 10)
      for (let j = 1; j <= 10; j++) {
        // Concatenate the product of i and j with some space
        row += (i * j).toString().padStart(4, ' ');
      }
      
      // Print the row after inner loop completes
      console.log(row);
    }
  }
  
  // Call the function to display the table
  multiplicationTable();
  